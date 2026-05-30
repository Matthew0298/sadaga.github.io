import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = join(root, "content");
const publicGalleryDir = join(root, "public", "gallery");
const incomingGalleryDir = join(root, "gallery", "incoming");
const MAX_GALLERY_PHOTOS = 50;
const GALLERY_ORIENTATIONS = new Set(["landscape", "portrait", "square"]);
const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

const EVENT_STATUSES = new Set(["upcoming", "past", "special"]);
const SOCIAL_IDS = new Set(["instagram", "youtube", "tiktok"]);

function fail(message) {
  console.error(`\n❌ ${message}`);
  process.exitCode = 1;
}

function readJson(relativePath) {
  const fullPath = join(contentDir, relativePath);
  let raw;
  try {
    raw = readFileSync(fullPath, "utf8");
  } catch {
    fail(`File non trovato: content/${relativePath}`);
    return null;
  }
  try {
    return JSON.parse(raw);
  } catch (error) {
    fail(`JSON non valido in content/${relativePath}: ${error.message}`);
    return null;
  }
}

function requireString(obj, key, label) {
  const value = obj[key];
  if (typeof value !== "string" || value.trim() === "") {
    fail(`${label}: campo "${key}" deve essere un testo non vuoto.`);
    return false;
  }
  return true;
}

function validateEvents(data) {
  if (!Array.isArray(data) || data.length === 0) {
    fail("events.json deve essere un array con almeno un evento.");
    return;
  }

  const ids = new Set();

  for (const [index, event] of data.entries()) {
    const label = `events.json [evento ${index + 1}]`;

    if (typeof event !== "object" || event === null) {
      fail(`${label}: deve essere un oggetto.`);
      continue;
    }

    if (typeof event.id !== "number" || !Number.isInteger(event.id) || event.id < 1) {
      fail(`${label}: "id" deve essere un numero intero positivo.`);
    } else if (ids.has(event.id)) {
      fail(`${label}: id ${event.id} è duplicato (ogni evento deve avere un id unico).`);
    } else {
      ids.add(event.id);
    }

    for (const key of ["title", "date", "time", "location", "description"]) {
      requireString(event, key, label);
    }

    if (!EVENT_STATUSES.has(event.status)) {
      fail(`${label}: "status" deve essere upcoming, past o special.`);
    }

    if (event.status === "special") {
      if (!event.details || typeof event.details !== "object") {
        fail(`${label}: gli eventi "special" richiedono il blocco "details".`);
      } else {
        for (const key of ["subtitle", "whatToBring", "refreshment", "contact"]) {
          requireString(event.details, key, `${label}.details`);
        }
      }
    } else if (event.details !== undefined) {
      fail(`${label}: "details" è consentito solo con status "special".`);
    }
  }
}

function validateBooks(data) {
  if (!Array.isArray(data)) {
    fail("books.json deve essere un array.");
    return;
  }

  for (const [index, book] of data.entries()) {
    const label = `books.json [libro ${index + 1}]`;
    if (typeof book !== "object" || book === null) {
      fail(`${label}: deve essere un oggetto.`);
      continue;
    }
    for (const key of ["title", "author", "description", "link"]) {
      requireString(book, key, label);
    }
    if (book.link && !/^https?:\/\//i.test(book.link)) {
      fail(`${label}: "link" deve iniziare con http:// o https://`);
    }
  }
}

function validateChiSiamo(data) {
  if (typeof data !== "object" || data === null) {
    fail("chi-siamo.json deve essere un oggetto.");
    return;
  }

  for (const section of [
    "hero",
    "intro",
    "definition",
    "activitiesSection",
    "values",
    "team",
    "cta",
  ]) {
    if (!data[section] || typeof data[section] !== "object") {
      fail(`chi-siamo.json: manca la sezione "${section}".`);
    }
  }

  requireString(data.intro, "eyebrow", "chi-siamo.json.intro");
  requireString(data.intro, "heading", "chi-siamo.json.intro");
  requireString(data.intro, "subheading", "chi-siamo.json.intro");

  if (!Array.isArray(data.activities) || data.activities.length === 0) {
    fail('chi-siamo.json: "activities" deve essere un array non vuoto.');
    return;
  }

  for (const [index, activity] of data.activities.entries()) {
    const label = `chi-siamo.json [attività ${index + 1}]`;
    requireString(activity, "title", label);
    if (activity.description !== undefined && typeof activity.description !== "string") {
      fail(`${label}: "description" deve essere testo se presente.`);
    }
  }

  if (!Array.isArray(data.definition?.paragraphs) || data.definition.paragraphs.length === 0) {
    fail('chi-siamo.json: "definition.paragraphs" deve essere un array non vuoto.');
  }

  if (!Array.isArray(data.values?.items) || data.values.items.length === 0) {
    fail('chi-siamo.json: "values.items" deve essere un array non vuoto.');
  } else {
    for (const [index, item] of data.values.items.entries()) {
      const label = `chi-siamo.json [valore ${index + 1}]`;
      requireString(item, "title", label);
      requireString(item, "description", label);
    }
  }

  const team = data.team;
  requireString(team, "title", "chi-siamo.json.team");
  requireString(team, "subtitle", "chi-siamo.json.team");
  requireString(team, "comingSoonNote", "chi-siamo.json.team");

  if (
    typeof team.placeholderSlots !== "number" ||
    team.placeholderSlots < 0 ||
    team.placeholderSlots > 12
  ) {
    fail('chi-siamo.json.team: "placeholderSlots" deve essere un numero tra 0 e 12.');
  }

  if (!Array.isArray(team.members)) {
    fail('chi-siamo.json.team: "members" deve essere un array.');
  } else {
    for (const [index, member] of team.members.entries()) {
      const label = `chi-siamo.json [membro ${index + 1}]`;
      requireString(member, "name", label);
      requireString(member, "role", label);
      if (member.bio !== undefined && typeof member.bio !== "string") {
        fail(`${label}: "bio" deve essere testo se presente.`);
      }
      if (member.image !== undefined && typeof member.image !== "string") {
        fail(`${label}: "image" deve essere testo (percorso) se presente.`);
      }
    }
  }

  requireString(data.cta, "linkLabel", "chi-siamo.json.cta");
  requireString(data.cta, "linkHref", "chi-siamo.json.cta");
}

function validateSocial(data) {
  if (typeof data !== "object" || data === null) {
    fail("social.json deve essere un oggetto.");
    return;
  }

  requireString(data, "intro", "social.json");

  if (!Array.isArray(data.links) || data.links.length === 0) {
    fail('social.json: "links" deve contenere almeno un social.');
    return;
  }

  for (const [index, link] of data.links.entries()) {
    const label = `social.json [link ${index + 1}]`;
    if (!SOCIAL_IDS.has(link.id)) {
      fail(`${label}: "id" deve essere instagram, youtube o tiktok.`);
    }
    requireString(link, "name", label);
    requireString(link, "description", label);
    requireString(link, "url", label);
    if (link.url && !/^https?:\/\//i.test(link.url)) {
      fail(`${label}: "url" deve iniziare con http:// o https://`);
    }
  }

  const benefits = data.benefitsSection;
  if (!benefits || typeof benefits !== "object") {
    fail('social.json: manca "benefitsSection".');
    return;
  }
  requireString(benefits, "title", "social.json.benefitsSection");
  requireString(benefits, "intro", "social.json.benefitsSection");
  if (!Array.isArray(benefits.bullets) || benefits.bullets.length === 0) {
    fail('social.json: "benefitsSection.bullets" deve essere un array non vuoto.');
  }
}

function countIncomingGalleryFiles() {
  try {
    return readdirSync(incomingGalleryDir).filter((name) => {
      if (name.startsWith(".") || name === "README.md") return false;
      const ext = name.slice(name.lastIndexOf(".")).toLowerCase();
      return IMAGE_EXT.has(ext);
    }).length;
  } catch {
    return 0;
  }
}

function validateGallery(data) {
  if (typeof data !== "object" || data === null) {
    fail("gallery.json deve essere un oggetto.");
    return;
  }

  requireString(data, "title", "gallery.json");

  if (data.subtitle !== undefined && (typeof data.subtitle !== "string" || data.subtitle.trim() === "")) {
    fail('gallery.json: "subtitle" deve essere testo non vuoto se presente, oppure omettilo.');
  }

  if (!Array.isArray(data.photos)) {
    fail('gallery.json: "photos" deve essere un array.');
    return;
  }

  if (data.photos.length > MAX_GALLERY_PHOTOS) {
    fail(
      `gallery.json: massimo ${MAX_GALLERY_PHOTOS} foto (trovate ${data.photos.length}). Esegui npm run gallery:process.`
    );
  }

  const incomingCount = countIncomingGalleryFiles();
  if (incomingCount > MAX_GALLERY_PHOTOS) {
    fail(
      `gallery/incoming/: massimo ${MAX_GALLERY_PHOTOS} file immagine (trovati ${incomingCount}).`
    );
  }

  const ids = new Set();

  for (const [index, photo] of data.photos.entries()) {
    const label = `gallery.json [foto ${index + 1}]`;

    if (typeof photo !== "object" || photo === null) {
      fail(`${label}: deve essere un oggetto.`);
      continue;
    }

    requireString(photo, "id", label);
    requireString(photo, "src", label);
    requireString(photo, "alt", label);

    if (ids.has(photo.id)) {
      fail(`${label}: id "${photo.id}" duplicato.`);
    } else {
      ids.add(photo.id);
    }

    if (typeof photo.width !== "number" || photo.width < 1) {
      fail(`${label}: "width" deve essere un numero positivo.`);
    }
    if (typeof photo.height !== "number" || photo.height < 1) {
      fail(`${label}: "height" deve essere un numero positivo.`);
    }
    if (!GALLERY_ORIENTATIONS.has(photo.orientation)) {
      fail(`${label}: "orientation" deve essere landscape, portrait o square.`);
    }

    const fileName = photo.src.split("/").pop();
    const filePath = join(publicGalleryDir, fileName);
    if (!fileName || !existsSync(filePath)) {
      fail(
        `${label}: file mancante public/gallery/${fileName ?? "?"}. Esegui: npm run gallery:process`
      );
    }
  }

  if (incomingCount > 0 && data.photos.length === 0) {
    fail(
      `gallery/incoming/ contiene ${incomingCount} foto ma gallery.json è vuoto. Esegui: npm run gallery:process`
    );
  }
}

const events = readJson("events.json");
const books = readJson("books.json");
const chiSiamo = readJson("chi-siamo.json");
const social = readJson("social.json");
const gallery = readJson("gallery.json");

if (events) validateEvents(events);
if (books) validateBooks(books);
if (chiSiamo) validateChiSiamo(chiSiamo);
if (social) validateSocial(social);
if (gallery) validateGallery(gallery);

if (process.exitCode === 1) {
  console.error("\nCorreggi i file in content/ e riprova: npm run validate:content\n");
} else {
  console.log("✅ Tutti i file in content/ sono validi.");
}
