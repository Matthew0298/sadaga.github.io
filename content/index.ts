import type {
  BookRecommendation,
  ChiSiamoContent,
  SiteEvent,
  SocialPageContent,
} from "./types";
import booksData from "./books.json";
import eventsData from "./events.json";
import chiSiamoData from "./chi-siamo.json";
import socialData from "./social.json";

export const bookRecommendations = booksData as BookRecommendation[];
export const events = eventsData as SiteEvent[];
export const chiSiamo = chiSiamoData as ChiSiamoContent;
export const socialPage = socialData as SocialPageContent;

export type * from "./types";
