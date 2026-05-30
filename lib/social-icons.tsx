import type { ReactNode } from "react";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import type { SocialIconId } from "@/content/types";

const icons: Record<SocialIconId, ReactNode> = {
  instagram: <FaInstagram className="h-6 w-6 shrink-0" aria-hidden />,
  youtube: <FaYoutube className="h-6 w-6 shrink-0" aria-hidden />,
  tiktok: <FaTiktok className="h-6 w-6 shrink-0" aria-hidden />,
};

export function socialIconFor(id: SocialIconId): ReactNode {
  return icons[id];
}
