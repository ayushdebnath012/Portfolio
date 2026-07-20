import Link from "next/link";
import { profile } from "@/data/profile";

export default function Footer() {
  const links = [
    { label: "Email", href: `mailto:${profile.email}` },
    { label: "LinkedIn", href: profile.linkedin },
    profile.github && { label: "GitHub", href: profile.github },
    profile.scholar && { label: "Google Scholar", href: profile.scholar },
  ].filter(Boolean);

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-cta">
          <h2>Get in touch</h2>
          <p>
            I'm open to research collaborations, and I post assistant positions
            on the{" "}
            <Link href="/openings" style={{ color: "var(--accent)" }}>
              openings page
            </Link>{" "}
            when projects have room. Email is the fastest way to reach me.
          </p>
        </div>
        <div className="footer-links">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="footer-base">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>{profile.institute}</span>
        </div>
      </div>
    </footer>
  );
}
