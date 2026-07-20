/** Prefix local public paths with Vite base (needed for GitHub Pages `/portfolio/`). */
export function asset(path: string): string {
  if (!path || /^https?:\/\//i.test(path) || path.startsWith("data:")) {
    return path;
  }
  const base = import.meta.env.BASE_URL || "/";
  const normalized = path.replace(/^\/+/, "");
  return `${base}${normalized}`;
}
