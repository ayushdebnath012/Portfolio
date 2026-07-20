import Link from "next/link";
import {
  profile,
  researchInterests,
  about,
  education,
  experience,
  projects,
  highlights,
  skills,
  coursework,
  responsibility,
} from "@/data/profile";

function SectionHead({ num, title }) {
  return (
    <div className="section-head">
      <span className="section-num">{num}</span>
      <h2>{title}</h2>
    </div>
  );
}

function Chips({ items }) {
  return (
    <div className="chips">
      {items.map((t) => (
        <span className="chip" key={t}>
          {t}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ---------- hero ---------- */}
      <header className="hero">
        <div className="container">
          <div className="hero-eyebrow">{profile.institute}</div>
          <h1>{profile.name}</h1>
          <p className="hero-role">
            <strong>{profile.role}</strong> · Research intern at Purdue,
            Stanford &amp; CMU
          </p>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <Link href="/openings" className="btn btn-primary">
              Research openings
            </Link>
            <a href={`mailto:${profile.email}`} className="btn">
              Email me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              LinkedIn
            </a>
          </div>
          <Chips items={researchInterests} />
        </div>
      </header>

      {/* ---------- about ---------- */}
      <section className="section" id="about">
        <div className="container">
          <SectionHead num="01" title="About" />
          <div className="about-grid">
            <div className="about-body">
              {about.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div>
              <div className="detail-head">Education</div>
              {education.map((e) => (
                <div className="edu-item" key={e.program}>
                  <div className="edu-program">{e.program}</div>
                  <div className="edu-meta">
                    {e.institution} · {e.year}
                  </div>
                  <div className="edu-score">{e.score}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- research & experience ---------- */}
      <section className="section" id="research">
        <div className="container">
          <SectionHead num="02" title="Research & Experience" />
          <div className="timeline">
            {experience.map((x) => (
              <article
                className={`exp${x.current ? " is-current" : ""}`}
                key={`${x.org}-${x.title}`}
              >
                <div className="exp-top">
                  <h3 className="exp-title">
                    {x.title} <em>· {x.org}</em>
                  </h3>
                  <span className="exp-period">{x.period}</span>
                </div>
                <p className="exp-advisor">
                  {x.advisor} — {x.dept}
                </p>
                <ul className="exp-points">
                  {x.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                <Chips items={x.tags} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- projects ---------- */}
      <section className="section" id="projects">
        <div className="container">
          <SectionHead num="03" title="Selected Projects" />
          <div className="card-grid">
            {projects.map((p) => (
              <article className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p className="card-blurb">{p.blurb}</p>
                <details>
                  <summary>Details</summary>
                  <ul className="exp-points">
                    {p.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </details>
                <Chips items={p.tags} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- highlights ---------- */}
      <section className="section" id="highlights">
        <div className="container">
          <SectionHead num="04" title="Awards & Conferences" />
          <div className="highlight-list">
            {highlights.map((h) => (
              <div className="highlight" key={h.label}>
                <div className="highlight-label">{h.label}</div>
                <div className="highlight-detail">{h.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- skills ---------- */}
      <section className="section" id="skills">
        <div className="container">
          <SectionHead num="05" title="Skills & Coursework" />
          <div>
            {skills.map((s) => (
              <div className="skill-row" key={s.group}>
                <div className="skill-group">{s.group}</div>
                <Chips items={s.items} />
              </div>
            ))}
            {coursework.map((c) => (
              <div className="skill-row" key={c.group}>
                <div className="skill-group">{c.group}</div>
                <Chips items={c.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- responsibility ---------- */}
      <section className="section" id="responsibility">
        <div className="container">
          <SectionHead num="06" title="Positions of Responsibility" />
          <div className="timeline">
            {responsibility.map((r) => (
              <article className="exp" key={r.title}>
                <div className="exp-top">
                  <h3 className="exp-title">
                    {r.title} <em>· {r.org}</em>
                  </h3>
                  <span className="exp-period">{r.period}</span>
                </div>
                <ul className="exp-points">
                  {r.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
