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
  emoji: string;
  text: string;
};

export type ChiSiamoContent = {
  hero: { title: string; subtitle: string };
  intro: { heading: string; subheading: string };
  definition: {
    leadPrefix: string;
    leadHighlight: string;
    paragraphs: string[];
  };
  activitiesSection: { title: string; subtitle: string };
  activities: ChiSiamoActivity[];
  values: { title: string; paragraphs: string[] };
  cta: { title: string; closing: string };
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
