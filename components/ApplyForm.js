"use client";

import { useEffect, useRef, useState } from "react";
import { formConfig, profile } from "@/data/profile";

const FIELDS = [
  {
    name: "name",
    label: "Full name",
    type: "text",
    required: true,
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    autoComplete: "email",
  },
  {
    name: "affiliation",
    label: "Institution & year",
    type: "text",
    required: true,
    placeholder: "e.g. IIT Kharagpur, 3rd year",
  },
  {
    name: "links",
    label: "CV / GitHub / homepage",
    type: "url",
    required: false,
    placeholder: "https://",
    hint: "A link to your CV or GitHub. Optional, but it helps.",
  },
];

export default function ApplyForm({ opening }) {
  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);
  const [state, setState] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const configured = Boolean(formConfig.accessKey);

  // Focus the first field once the dialog is actually open.
  useEffect(() => {
    if (state === "idle" && dialogRef.current?.open) {
      firstFieldRef.current?.focus();
    }
  }, [state]);

  function open() {
    setState("idle");
    setError("");
    dialogRef.current?.showModal();
    // showModal focuses the dialog itself; move to the first input.
    requestAnimationFrame(() => firstFieldRef.current?.focus());
  }

  function close() {
    dialogRef.current?.close();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot: bots fill hidden fields, humans can't see them.
    if (form.botcheck?.checked) return;

    setState("sending");
    setError("");

    const payload = {
      access_key: formConfig.accessKey,
      subject: `Application — ${opening.title}`,
      from_name: "Research Openings Board",
      replyto: form.email.value,
      posting: opening.title,
      university: opening.university || "—",
      posting_id: opening.id,
      name: form.name.value,
      email: form.email.value,
      affiliation: form.affiliation.value,
      links: form.links.value || "—",
      message: form.message.value,
    };

    try {
      const res = await fetch(formConfig.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setState("sent");
        form.reset();
      } else {
        setState("error");
        setError(
          data.message ||
            `The form service returned ${res.status}. Your application was not sent.`
        );
      }
    } catch {
      setState("error");
      setError(
        "Couldn't reach the form service — you may be offline. Nothing was sent."
      );
    }
  }

  // No key configured yet: keep the original mailto behaviour rather than
  // showing a form that would silently fail.
  if (!configured) {
    const href = opening.applyUrl
      ? opening.applyUrl
      : `mailto:${opening.applyEmail || profile.email}?subject=${encodeURIComponent(
          `Application — ${opening.title}`
        )}`;
    return (
      <a
        className="btn btn-primary"
        href={href}
        target={opening.applyUrl ? "_blank" : undefined}
        rel="noreferrer"
      >
        Apply
      </a>
    );
  }

  return (
    <>
      <button className="btn btn-primary" onClick={open}>
        Apply
      </button>

      <dialog
        ref={dialogRef}
        className="modal"
        aria-labelledby={`apply-heading-${opening.id}`}
        onClose={() => setState("idle")}
      >
        <div className="modal-head">
          <div>
            {opening.university ? (
              <div className="opening-uni">{opening.university}</div>
            ) : null}
            <h2 id={`apply-heading-${opening.id}`}>{opening.title}</h2>
          </div>
          <button
            className="modal-close"
            onClick={close}
            aria-label="Close application form"
          >
            ×
          </button>
        </div>

        {state === "sent" ? (
          <div className="modal-body">
            <div className="form-success" role="status">
              <strong>Application sent.</strong>
              <p>
                It's on its way to {profile.name.split(" ")[0]}'s inbox. You'll
                get a reply at the address you gave.
              </p>
            </div>
            <div className="modal-actions">
              <button className="btn" onClick={close}>
                Done
              </button>
            </div>
          </div>
        ) : (
          <form className="modal-body" onSubmit={handleSubmit} noValidate={false}>
            <p className="form-intro">
              Applying for this position. Everything here goes straight to{" "}
              {profile.name.split(" ")[0]} — no account needed.
            </p>

            {FIELDS.map((f, i) => (
              <div className="field" key={f.name}>
                <label htmlFor={`${f.name}-${opening.id}`}>
                  {f.label}
                  {f.required ? (
                    <span aria-hidden="true" className="req">
                      *
                    </span>
                  ) : (
                    <span className="optional">optional</span>
                  )}
                </label>
                <input
                  ref={i === 0 ? firstFieldRef : undefined}
                  id={`${f.name}-${opening.id}`}
                  name={f.name}
                  type={f.type}
                  required={f.required}
                  placeholder={f.placeholder}
                  autoComplete={f.autoComplete}
                  disabled={state === "sending"}
                  aria-describedby={f.hint ? `${f.name}-hint-${opening.id}` : undefined}
                />
                {f.hint ? (
                  <span className="hint" id={`${f.name}-hint-${opening.id}`}>
                    {f.hint}
                  </span>
                ) : null}
              </div>
            ))}

            <div className="field">
              <label htmlFor={`message-${opening.id}`}>
                Why this project
                <span aria-hidden="true" className="req">
                  *
                </span>
              </label>
              <textarea
                id={`message-${opening.id}`}
                name="message"
                rows={5}
                required
                disabled={state === "sending"}
                placeholder="What relevant work have you done, and what draws you to this problem? A few sentences is plenty."
              />
            </div>

            {/* honeypot — visually hidden, not display:none, so bots still fill it */}
            <label className="botcheck" aria-hidden="true">
              Leave this field empty
              <input type="checkbox" name="botcheck" tabIndex={-1} />
            </label>

            {state === "error" ? (
              <p className="form-error" role="alert">
                {error}{" "}
                <a href={`mailto:${opening.applyEmail || profile.email}`}>
                  Email directly instead
                </a>
                .
              </p>
            ) : null}

            <div className="modal-actions">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={state === "sending"}
              >
                {state === "sending" ? "Sending…" : "Send application"}
              </button>
              <button
                type="button"
                className="btn"
                onClick={close}
                disabled={state === "sending"}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </dialog>
    </>
  );
}
