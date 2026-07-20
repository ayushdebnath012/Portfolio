import Link from "next/link";
import { profile } from "@/data/profile";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-brand">
          {profile.name}
          <span>.</span>
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
          <Link href="/openings" className="nav-cta">
            Openings
          </Link>
        </div>
      </div>
    </nav>
  );
}
