import type {
  BookRecommendation,
  ChiSiamoContent,
  GalleryContent,
  SiteEvent,
  SocialPageContent,
} from "./types";
import booksData from "./books.json";
import eventsData from "./events.json";
import chiSiamoData from "./chi-siamo.json";
import socialData from "./social.json";
import galleryData from "./gallery.json";

export const bookRecommendations = booksData as BookRecommendation[];
export const events = eventsData as SiteEvent[];
export const chiSiamo = chiSiamoData as ChiSiamoContent;
export const socialPage = socialData as SocialPageContent;
export const gallery = galleryData as GalleryContent;

export type * from "./types";
