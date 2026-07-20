"use client";

import { useMemo, useState } from "react";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

// Format without Date parsing so server and client always agree (no hydration
// mismatch, and no timezone shifting an ISO date by a day).
function formatDate(iso) {
  if (!iso) return null;
  const [y, m, d] = iso.split("-");
  const month = MONTHS[Number(m) - 1];
  if (!month) return iso;
  return `${Number(d)} ${month} ${y}`;
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

function Opening({ o }) {
  const isOpen = o.status === "open";
  const applyHref = o.applyUrl
    ? o.applyUrl
    : o.applyEmail
    ? `mailto:${o.applyEmail}?subject=${encodeURIComponent(
        `Application — ${o.title}`
      )}`
    : null;

  return (
    <article className={`opening${isOpen ? "" : " is-closed"}`}>
      <div className="opening-top">
        <div>
          <h2>{o.title}</h2>
          {o.group ? (
            <div className="opening-advisors">{o.group}</div>
          ) : null}
        </div>
        <span className={`badge ${isOpen ? "badge-open" : "badge-closed"}`}>
          {isOpen ? "Open" : "Closed"}
        </span>
      </div>

      {(o.advisor || o.coAdvisor) && (
        <p className="opening-advisors">
          {o.advisor && (
            <>
              Advised by <strong>{o.advisor}</strong>
            </>
          )}
          {o.advisor && o.coAdvisor ? ", with " : ""}
          {o.coAdvisor && <strong>{o.coAdvisor}</strong>}
        </p>
      )}

      <div className="meta-grid">
        <Meta label="Mode" value={o.mode} />
        <Meta label="Location" value={o.location} />
        <Meta label="Commitment" value={o.commitment} />
        <Meta label="Duration" value={o.duration} />
        <Meta label="Stipend" value={o.stipend} />
        <Meta
          label="Deadline"
          value={o.deadline ? formatDate(o.deadline) : "Rolling"}
        />
      </div>

      {o.summary ? <p className="opening-summary">{o.summary}</p> : null}

      <div className="detail-cols">
        {o.responsibilities?.length > 0 && (
          <div>
            <div className="detail-head">What you'd do</div>
            <ul>
              {o.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        )}
        {o.requirements?.length > 0 && (
          <div>
            <div className="detail-head">What we're looking for</div>
            <ul>
              {o.requirements.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {o.tags?.length > 0 && (
        <div className="chips" style={{ marginBottom: 20 }}>
          {o.tags.map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="apply-row">
        {isOpen && applyHref ? (
          <a
            className="btn btn-primary"
            href={applyHref}
            target={o.applyUrl ? "_blank" : undefined}
            rel="noreferrer"
          >
            Apply
          </a>
        ) : null}
        <span className="apply-note">
          {isOpen
            ? o.applyNote || "Reach out with a CV and a short note."
            : "This position is no longer accepting applications."}
        </span>
        {o.posted ? (
          <span className="exp-period">Posted {formatDate(o.posted)}</span>
        ) : null}
      </div>
    </article>
  );
}

export default function OpeningsBoard({ openings }) {
  const [status, setStatus] = useState("open");
  const [tag, setTag] = useState(null);

  const tags = useMemo(() => {
    const all = new Set();
    openings.forEach((o) => (o.tags || []).forEach((t) => all.add(t)));
    return [...all].sort();
  }, [openings]);

  const visible = useMemo(
    () =>
      openings.filter((o) => {
        if (status !== "all" && o.status !== status) return false;
        if (tag && !(o.tags || []).includes(tag)) return false;
        return true;
      }),
    [openings, status, tag]
  );

  const openCount = openings.filter((o) => o.status === "open").length;

  return (
    <>
      <div className="filter-bar">
        <span className="filter-label">Status</span>
        {[
          ["open", `Open (${openCount})`],
          ["closed", "Closed"],
          ["all", "All"],
        ].map(([value, label]) => (
          <button
            key={value}
            className="filter-btn"
            aria-pressed={status === value}
            onClick={() => setStatus(value)}
          >
            {label}
          </button>
        ))}

        {tags.length > 0 && (
          <>
            <span className="filter-label" style={{ marginLeft: 16 }}>
              Area
            </span>
            {tags.map((t) => (
              <button
                key={t}
                className="filter-btn"
                aria-pressed={tag === t}
                onClick={() => setTag(tag === t ? null : t)}
              >
                {t}
              </button>
            ))}
          </>
        )}
      </div>

      {visible.length === 0 ? (
        <div className="empty-state">
          <strong>Nothing here right now.</strong>
          Try clearing the filters — or check back later, since new positions go
          up as projects get funded.
        </div>
      ) : (
        <div className="openings-list">
          {visible.map((o) => (
            <Opening o={o} key={o.id} />
          ))}
        </div>
      )}
    </>
  );
}
