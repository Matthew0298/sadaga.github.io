import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = join(root, "content");

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

  for (const section of ["hero", "intro", "definition", "activitiesSection", "values", "cta"]) {
    if (!data[section] || typeof data[section] !== "object") {
      fail(`chi-siamo.json: manca la sezione "${section}".`);
    }
  }

  if (!Array.isArray(data.activities) || data.activities.length === 0) {
    fail('chi-siamo.json: "activities" deve essere un array non vuoto.');
    return;
  }

  for (const [index, activity] of data.activities.entries()) {
    const label = `chi-siamo.json [attività ${index + 1}]`;
    requireString(activity, "emoji", label);
    requireString(activity, "text", label);
  }

  if (!Array.isArray(data.definition?.paragraphs) || data.definition.paragraphs.length === 0) {
    fail('chi-siamo.json: "definition.paragraphs" deve essere un array non vuoto.');
  }

  if (!Array.isArray(data.values?.paragraphs) || data.values.paragraphs.length === 0) {
    fail('chi-siamo.json: "values.paragraphs" deve essere un array non vuoto.');
  }
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

const events = readJson("events.json");
const books = readJson("books.json");
const chiSiamo = readJson("chi-siamo.json");
const social = readJson("social.json");

if (events) validateEvents(events);
if (books) validateBooks(books);
if (chiSiamo) validateChiSiamo(chiSiamo);
if (social) validateSocial(social);

if (process.exitCode === 1) {
  console.error("\nCorreggi i file in content/ e riprova: npm run validate:content\n");
} else {
  console.log("✅ Tutti i file in content/ sono validi.");
}
