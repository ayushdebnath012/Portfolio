import Link from "next/link";
import { profile, publications, presentations } from "@/data/profile";

export const metadata = {
  title: `Publications — ${profile.name}`,
  description:
    "Papers and conference presentations, with a full write-up of each.",
};

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

function Meta({ label, value }) {
  if (!value) return null;
  return (
    <div>
      <div className="meta-key">{label}</div>
      <div className="meta-val">{value}</div>
    </div>
  );
}

const LINK_LABELS = {
  paper: "Paper",
  code: "Code",
  slides: "Slides",
  poster: "Poster",
};

// Renders whichever of paper/code/slides/poster have a URL; nothing if none do.
function Links({ links }) {
  const present = Object.entries(links || {}).filter(([, href]) => href);
  if (!present.length) return null;
  return (
    <div className="pub-links">
      {present.map(([key, href]) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          {LINK_LABELS[key] || key}
        </a>
      ))}
    </div>
  );
}

function Publication({ p }) {
  return (
    <article className="pub" id={p.id}>
      <div className="opening-top">
        <div>
          <div className="opening-uni">
            {p.venue}
            {p.track ? ` · ${p.track}` : ""}
          </div>
          <h2 className="pub-title">{p.title}</h2>
          {p.authors ? <p className="pub-authors">{p.authors}</p> : null}
        </div>
        {p.status ? <span className="badge badge-open">{p.status}</span> : null}
      </div>

      <div className="meta-grid">
        <Meta label="Venue" value={p.venueLong || p.venue} />
        <Meta label="Track" value={p.track} />
        <Meta label="Date" value={p.date} />
        <Meta label="Status" value={p.status} />
      </div>

      <div className="pub-body">
        {p.summary.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {p.stats?.length ? (
        <div className="stat-strip">
          {p.stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      ) : null}

      <div className="detail-cols">
        {p.contributions?.length ? (
          <div>
            <div className="detail-head">Contributions</div>
            <ul>
              {p.contributions.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {p.results?.length ? (
          <div>
            <div className="detail-head">Results</div>
            <ul>
              {p.results.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <Chips items={p.tags} />
      <Links links={p.links} />
    </article>
  );
}

function Presentation({ p }) {
  return (
    <article className="pub pub-compact" id={p.id}>
      <div className="opening-top">
        <div>
          <div className="opening-uni">
            {p.venue}
            {p.location ? ` · ${p.location}` : ""}
          </div>
          <h2 className="pub-title">{p.title}</h2>
        </div>
        {p.type ? <span className="badge badge-closed">{p.type}</span> : null}
      </div>

      <div className="meta-grid">
        <Meta label="Venue" value={p.venueLong || p.venue} />
        <Meta label="Location" value={p.location} />
        <Meta label="Date" value={p.date} />
      </div>

      <ul className="exp-points">
        {p.points.map((pt, i) => (
          <li key={i}>{pt}</li>
        ))}
      </ul>

      <Chips items={p.tags} />
      <Links links={p.links} />
    </article>
  );
}

export default function PublicationsPage() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Publications &amp; Conferences</h1>
          <p>
            Papers and conference presentations from my research, each with a
            longer write-up than a CV line allows. Preprints, code and slides
            are linked as they become available; for anything not yet public,{" "}
            <a href={`mailto:${profile.email}`} style={{ color: "var(--accent)" }}>
              email me
            </a>
            .
          </p>
        </div>
      </header>

      <section className="section section-tight" id="papers">
        <div className="container">
          <SectionHead num="01" title="Publications" />
          <div className="pub-list">
            {publications.map((p) => (
              <Publication p={p} key={p.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight" id="talks">
        <div className="container">
          <SectionHead num="02" title="Conference Presentations" />
          <div className="pub-list">
            {presentations.map((p) => (
              <Presentation p={p} key={p.id} />
            ))}
          </div>
          <p className="pub-foot">
            The research behind these is described on the{" "}
            <Link href="/#research" style={{ color: "var(--accent)" }}>
              research timeline
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
