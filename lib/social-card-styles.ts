import type { SocialIconId } from "@/content/types";

/** Classi Tailwind letterali: devono restare qui così il JIT le include nel CSS (non usare stringhe solo in JSON). */
export const socialCardBgClass: Record<SocialIconId, string> = {
  instagram:
    "bg-[radial-gradient(circle_at_30%_30%,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)]",
  youtube: "bg-red-600",
  tiktok: "bg-black",
};
