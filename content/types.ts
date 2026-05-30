export type BookRecommendation = {
  title: string;
  author: string;
  description: string;
  link: string;
};

export type EventStatus = "upcoming" | "past" | "special";

export type EventDetails = {
  subtitle: string;
  whatToBring: string;
  refreshment: string;
  contact: string;
};

export type SiteEvent = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  status: EventStatus;
  details?: EventDetails;
};

export type ChiSiamoActivity = {
  title: string;
  description?: string;
};

export type ChiSiamoValue = {
  title: string;
  description: string;
};

export type ChiSiamoMember = {
  name: string;
  role: string;
  bio?: string;
  image?: string;
};

export type ChiSiamoTeam = {
  title: string;
  subtitle: string;
  comingSoonNote: string;
  placeholderSlots: number;
  members: ChiSiamoMember[];
};

export type ChiSiamoContent = {
  hero: { title: string; subtitle: string };
  intro: { eyebrow: string; heading: string; subheading: string };
  definition: {
    leadPrefix: string;
    leadHighlight: string;
    paragraphs: string[];
  };
  activitiesSection: { title: string; subtitle: string };
  activities: ChiSiamoActivity[];
  values: { title: string; items: ChiSiamoValue[] };
  team: ChiSiamoTeam;
  cta: {
    title: string;
    closing: string;
    linkLabel: string;
    linkHref: string;
  };
};

export type SocialIconId = "instagram" | "youtube" | "tiktok";

export type SocialLink = {
  id: SocialIconId;
  name: string;
  description: string;
  url: string;
};

export type SocialPageContent = {
  intro: string;
  links: SocialLink[];
  benefitsSection: {
    title: string;
    intro: string;
    bullets: string[];
  };
};

export type GalleryOrientation = "landscape" | "portrait" | "square";

export type GalleryPhoto = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  orientation: GalleryOrientation;
  sourceFile?: string;
};

export type GalleryContent = {
  title: string;
  subtitle?: string;
  maxPhotos: number;
  photos: GalleryPhoto[];
};
