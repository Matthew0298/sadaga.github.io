const BASE_PATH = "/sadaga.github.io";

/** Percorso pubblico con prefisso GitHub Pages. */
export function assetPath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
