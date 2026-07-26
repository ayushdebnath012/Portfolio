import fs from "node:fs";
import path from "node:path";
import { profile } from "./profile";

// Server-only — this reads the filesystem at build time. Never import it from
// a "use client" component; the bundler can't ship node:fs to the browser.

/**
 * Href for the résumé PDF, or "" if there's nothing to link to.
 *
 * The site is a static export, so the file either exists when the build runs or
 * it never will. Checking here means the button simply doesn't render until the
 * PDF is actually sitting in public/ — the same "empty means hidden" rule the
 * rest of the data layer follows, and it can't leave a 404 on the page.
 */
export function resumeHref() {
  if (!profile.resume) return "";

  const relative = profile.resume.replace(/^\//, "");
  if (!fs.existsSync(path.join(process.cwd(), "public", relative))) return "";

  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/${relative}`;
}
