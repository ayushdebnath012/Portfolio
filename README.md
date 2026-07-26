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
- The University dropdown is driven by the top-level `universities` array in
  the same file, so it still offers choices while the board is empty. Any
  `university` named on a posting is merged in automatically, so you never have
  to keep the two in sync by hand.
- The Area filter builds itself from the `tags` across all postings. It and the
  Status filter are hidden entirely when nothing is posted.
- **Any field left as `""` is hidden rather than rendered empty**, so omit what
  you don't know yet instead of writing "TBD".
- Dates are formatted from the ISO string directly, without `Date` parsing, so
  no timezone ever shifts a deadline by a day.

`data/openings.json` currently has an empty `openings` array — nothing is
advertised, and the board shows its empty state until you post something. Two filled-in reference entries live in
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

## The résumé link

Drop a PDF at `public/Ayush_Debnath_Resume.pdf` (the path is `profile.resume`
in `data/profile.js`) and a Résumé button appears in the hero and the footer.

The check happens at build time in `data/resume.js`: if the file isn't there,
the href resolves to `""` and neither link renders, so the site can't point at
a missing PDF. Rebuild after adding it — a static export can't notice new files
on its own.

## Deploying

Live at **<https://ayushdebnath012.github.io/Portfolio/>**, served from the
`gh-pages` branch.

```bash
npm run deploy
```

That builds with `BASE_PATH=/Portfolio` and force-pushes `out/` to `gh-pages`.
The branch is generated output only — never commit to it by hand, the next
deploy overwrites it. For a custom domain, clear the base path:

```bash
BASE_PATH= npm run deploy
```

Two things that will silently break a GitHub Pages deploy if they go missing:
`public/.nojekyll` (without it Jekyll drops the whole `_next/` directory, so
the site loads with no CSS or JS) and `BASE_PATH` (without it every asset URL
points at the domain root and 404s on a project site).

**Vercel / Netlify / Cloudflare Pages**: point at the repo, build command
`npm run build`, output directory `out`. No `BASE_PATH` needed.

## Still to fill in

- `profile.linkedin` in `data/profile.js` — **currently a guessed URL, verify it.**
- `profile.scholar` — an empty string hides that footer link.
- `public/Ayush_Debnath_Resume.pdf` — the Résumé button stays hidden until it's
  there. Add it, then `npm run deploy`.
- `formConfig.accessKey` in `data/profile.js` — until it's set, Apply falls back
  to a mailto link.
