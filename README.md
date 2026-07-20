# Portfolio — Ayush Debnath

Next.js 16 (App Router) portfolio with a JSON-driven research openings board.
Builds to fully static HTML, so it hosts anywhere for free.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site → ./out
```

## Editing content

| What | Where |
| --- | --- |
| Bio, education, experience, projects, awards, skills | `data/profile.js` |
| Research openings | `data/openings.json` |
| Colors, spacing, typography | `app/globals.css` (tokens at the top) |

Everything is data-driven — you shouldn't need to touch the components to
change what the site says.

## Posting a research opening

Add an object to the `openings` array in `data/openings.json`, then commit and
push. The board picks it up on the next build.

```jsonc
{
  "id": "unique-slug-2026",        // must be unique; used as the React key
  "status": "open",                 // "open" or "closed" — drives the badge + default filter
  "university": "Carnegie Mellon University",  // shown above the title; builds the University filter
  "title": "Undergraduate RA: <topic>",
  "group": "Lab or group name",
  "advisor": "Prof. Jane Doe",
  "coAdvisor": "John Smith, PhD candidate",   // "" to omit
  "location": "Remote",
  "mode": "Remote",                 // Remote / Hybrid / On-site
  "commitment": "15–20 hrs/week",
  "duration": "4–6 months",
  "stipend": "Unpaid / credit-eligible",
  "posted": "2026-07-20",           // ISO, YYYY-MM-DD
  "deadline": "2026-08-15",         // or null → displays "Rolling"
  "tags": ["Topic A", "Topic B"],   // these auto-populate the Area filter
  "summary": "One paragraph on the project and why it's interesting.",
  "responsibilities": ["…", "…"],
  "requirements": ["…", "…"],
  "applyEmail": "ayush.d@kgpian.iitkgp.ac.in",
  "applyUrl": "",                   // a form link; takes priority over applyEmail
  "applyNote": "What to send when applying."
}
```

Notes:

- To close a role, flip `status` to `"closed"` — it stays visible under the
  Closed/All filters as a record, greyed out, with the Apply button removed.
- The University and Area filters build themselves from the `university` and
  `tags` values across all postings — add a new university and its filter
  button appears on its own.
- **Any field left as `""` is hidden rather than rendered empty**, so omit what
  you don't know yet instead of writing "TBD".
- Dates are formatted from the ISO string directly, without `Date` parsing, so
  no timezone ever shifts a deadline by a day.

`data/openings.json` starts empty, so the board shows its empty state until you
post something. Two filled-in reference entries live in
`data/openings.example.json` — copy one, edit it, paste it into the live file.
That file is never imported by the site, so it can't leak a placeholder posting
onto the page.

## Turning on the application form

The Apply button opens a form (name, email, institution, links, motivation)
that emails you the submission. Because the site is a **static export there's
no server to receive a POST**, so delivery goes through Web3Forms.

1. Go to <https://web3forms.com> and enter your email — no account or password.
2. They email you an access key.
3. Paste it into `formConfig.accessKey` in `data/profile.js`.
4. Rebuild and deploy.

Until that key is set, the Apply button falls back to opening a pre-addressed
email instead — the board stays usable either way, it just loses the form.

The access key is **not a secret**: it identifies your form and only permits
sending mail to the address you registered. It's meant to sit in client-side
code, which is why it lives in `profile.js` rather than an env var.

Each submission arrives with the posting title, its id and the university, so
you can tell which role an applicant is answering. The form includes a
honeypot field for spam; Web3Forms adds its own filtering on top.

Swapping providers (Formspree, Getform, …) means changing `formConfig.endpoint`
and the payload keys in `components/ApplyForm.js` — the rest is provider-agnostic.

## Deploying

The build emits a static `./out` directory. No Node server needed at runtime.

**GitHub Pages** (project site at `username.github.io/repo-name`):

```bash
BASE_PATH=/repo-name npm run build
```

Then publish `out/`. The `BASE_PATH` env var is required or CSS and links break
on a project site — skip it only for a custom domain or a `username.github.io`
root repo.

**Vercel / Netlify / Cloudflare Pages**: point at the repo, build command
`npm run build`, output directory `out`. No `BASE_PATH` needed.

## Still to fill in

- `profile.linkedin` in `data/profile.js` — **currently a guessed URL, verify it.**
- `profile.scholar` — an empty string hides that footer link.
- Drop your résumé at `public/Ayush_Debnath_Resume.pdf` if you want to link it.
