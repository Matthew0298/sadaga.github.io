/**
 * Legge le foto in gallery/incoming/, le ridimensiona (mantiene proporzioni
 * verticali/orizzontali), genera WebP in public/gallery/ e content/gallery.json.
 */
import {
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const INCOMING_DIR = join(root, "gallery", "incoming");
const OUT_DIR = join(root, "public", "gallery");
const MANIFEST_PATH = join(root, "content", "gallery.json");
const CONFIG_PATH = join(root, "gallery", "gallery.config.json");

const MAX_PHOTOS = 50;
const MAX_LONG_EDGE = 1600;
const WEBP_QUALITY = 82;
const WARN_SOURCE_BYTES = 3 * 1024 * 1024;
const BASE_PATH = "/sadaga.github.io";

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

const defaultConfig = {
  title: "Momenti dagli eventi",
  subtitle:
    "Uno scorrimento continuo delle foto scattate ai nostri incontri e workshop.",
};

function loadConfig() {
  try {
    const raw = readFileSync(CONFIG_PATH, "utf8");
    return { ...defaultConfig, ...JSON.parse(raw) };
  } catch {
    return defaultConfig;
  }
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function altFromFilename(name) {
  const base = name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").trim();
  if (!base) return "Foto evento Sadaga";
  return base.charAt(0).toUpperCase() + base.slice(1);
}

function orientation(width, height) {
  if (width > height) return "landscape";
  if (width < height) return "portrait";
  return "square";
}

function listIncomingFiles() {
  let names;
  try {
    names = readdirSync(INCOMING_DIR);
  } catch {
    mkdirSync(INCOMING_DIR, { recursive: true });
    return [];
  }

  return names
    .filter((name) => {
      if (name.startsWith(".") || name === "README.md") return false;
      return IMAGE_EXT.has(extname(name).toLowerCase());
    })
    .map((name) => {
      const fullPath = join(INCOMING_DIR, name);
      const stat = statSync(fullPath);
      return { name, fullPath, mtime: stat.mtimeMs, size: stat.size };
    })
    .sort((a, b) => b.mtime - a.mtime);
}

async function processOne(file, usedIds) {
  const { name, fullPath, size } = file;

  if (size > WARN_SOURCE_BYTES) {
    console.warn(
      `⚠️  ${name} è ${(size / 1024 / 1024).toFixed(1)} MB: per il web conviene meno di ~3 MB; verrà comunque compressa.`
    );
  }

  let baseId = slugify(name);
  if (!baseId) baseId = "foto";
  let id = baseId;
  let n = 2;
  while (usedIds.has(id)) {
    id = `${baseId}-${n}`;
    n += 1;
  }
  usedIds.add(id);

  const outName = `${id}.webp`;
  const outPath = join(OUT_DIR, outName);

  const pipeline = sharp(fullPath, { failOn: "none" }).rotate();
  const meta = await pipeline.metadata();

  if (!meta.width || !meta.height) {
    throw new Error(`impossibile leggere dimensioni (${name})`);
  }

  const resized = pipeline.resize({
    width: meta.width >= meta.height ? MAX_LONG_EDGE : undefined,
    height: meta.height > meta.width ? MAX_LONG_EDGE : undefined,
    fit: "inside",
    withoutEnlargement: true,
  });

  const { data, info } = await resized
    .webp({ quality: WEBP_QUALITY, effort: 4 })
    .toBuffer({ resolveWithObject: true });

  writeFileSync(outPath, data);

  const kb = (data.length / 1024).toFixed(0);
  const orient = orientation(info.width, info.height);
  console.log(
    `  ✓ ${name} → ${outName} (${info.width}×${info.height}, ${orient}, ~${kb} KB)`
  );

  return {
    id,
    src: `${BASE_PATH}/gallery/${outName}`,
    alt: altFromFilename(name),
    width: info.width,
    height: info.height,
    orientation: orient,
    sourceFile: name,
  };
}

async function main() {
  const config = loadConfig();
  const incoming = listIncomingFiles();

  mkdirSync(OUT_DIR, { recursive: true });
  mkdirSync(INCOMING_DIR, { recursive: true });

  const toProcess = incoming.slice(0, MAX_PHOTOS);
  if (incoming.length > MAX_PHOTOS) {
    console.warn(
      `⚠️  Trovate ${incoming.length} foto: ne verranno usate ${MAX_PHOTOS} (le più recenti per data di modifica).`
    );
  }

  for (const entry of readdirSync(OUT_DIR)) {
    if (entry === ".gitkeep") continue;
    rmSync(join(OUT_DIR, entry), { force: true });
  }

  console.log(`\n📷 Galleria: ${toProcess.length} foto da gallery/incoming/\n`);

  const usedIds = new Set();
  const photos = [];

  for (const file of toProcess) {
    try {
      photos.push(await processOne(file, usedIds));
    } catch (error) {
      console.error(`  ✗ ${file.name}: ${error.message}`);
      process.exitCode = 1;
    }
  }

  const manifest = {
    title: config.title,
    subtitle: config.subtitle,
    maxPhotos: MAX_PHOTOS,
    photos,
  };

  writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

  console.log(`\n✅ Scritti ${photos.length} file in public/gallery/ e content/gallery.json\n`);

  if (process.exitCode === 1) {
    process.exit(1);
  }
}

main();
