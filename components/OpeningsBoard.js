"use client";

import { useMemo, useState } from "react";
import ApplyForm from "@/components/ApplyForm";
import { profile } from "@/data/profile";

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

  return (
    <article className={`opening${isOpen ? "" : " is-closed"}`}>
      <div className="opening-top">
        <div>
          {o.university ? (
            <div className="opening-uni">{o.university}</div>
          ) : null}
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
          {o.advisor ? (
            <>
              Advised by <strong>{o.advisor}</strong>
              {o.coAdvisor ? (
                <>
                  , with <strong>{o.coAdvisor}</strong>
                </>
              ) : null}
            </>
          ) : (
            <>
              Working with <strong>{o.coAdvisor}</strong>
            </>
          )}
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
        {isOpen ? <ApplyForm opening={o} /> : null}
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

export default function OpeningsBoard({ openings, universities: listed = [] }) {
  const [status, setStatus] = useState("open");
  const [tag, setTag] = useState(null);
  const [uni, setUni] = useState("");

  const tags = useMemo(() => {
    const all = new Set();
    openings.forEach((o) => (o.tags || []).forEach((t) => all.add(t)));
    return [...all].sort();
  }, [openings]);

  // The curated list plus anything a posting names, so the dropdown still has
  // options when the board is empty.
  const universities = useMemo(() => {
    const all = new Set(listed);
    openings.forEach((o) => o.university && all.add(o.university));
    return [...all].sort();
  }, [openings, listed]);

  const visible = useMemo(
    () =>
      openings.filter((o) => {
        if (status !== "all" && o.status !== status) return false;
        if (tag && !(o.tags || []).includes(tag)) return false;
        if (uni && o.university !== uni) return false;
        return true;
      }),
    [openings, status, tag, uni]
  );

  const openCount = openings.filter((o) => o.status === "open").length;

  return (
    <>
      <div className="filter-bar">
        {universities.length > 0 && (
          <>
            <label className="filter-label" htmlFor="uni-filter">
              University
            </label>
            <select
              id="uni-filter"
              className={`filter-select${uni ? " is-active" : ""}`}
              value={uni}
              onChange={(e) => setUni(e.target.value)}
            >
              <option value="">All universities</option>
              {universities.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </>
        )}

        {openings.length > 0 && (
          <>
            <span className="filter-label" style={{ marginLeft: 16 }}>
              Status
            </span>
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
          </>
        )}

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
          {openings.length === 0 ? (
            <>
              <strong>
                {uni
                  ? `No openings at ${uni} right now.`
                  : "No openings posted right now."}
              </strong>
              Nothing is being advertised at the moment. New positions go up
              here as projects get funded — check back, or{" "}
              <a href={`mailto:${profile.email}`}>email me</a> if you want to be
              told when one opens.
            </>
          ) : (
            <>
              <strong>Nothing matches that filter.</strong>
              Try another university, status, or research area to see the other
              postings.
            </>
          )}
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
