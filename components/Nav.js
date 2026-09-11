import Link from "next/link";
import { profile } from "@/data/profile";
import { resumeHref } from "@/data/resume";

export default function Nav() {
  const resume = resumeHref();

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-brand">
          {/* Full name on desktop, first name on phones — the links need the room. */}
          <span className="brand-full">{profile.name}</span>
          <span className="brand-short">{profile.shortName}</span>
          <span className="brand-dot">.</span>
        </Link>
        <div className="nav-links">
          <Link href="/#research" className="hide-sm">
            Research
          </Link>
          <Link href="/#projects" className="hide-sm">
            Projects
          </Link>
          <Link href="/#about" className="hide-sm">
            About
          </Link>
          <Link href="/publications">Publications</Link>
          {resume ? (
            <a href={resume} target="_blank" rel="noreferrer">
              Résumé
            </a>
          ) : null}
          <Link href="/openings" className="nav-cta">
            Openings
          </Link>
        </div>
      </div>
    </nav>
  );
}
