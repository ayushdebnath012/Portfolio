// Build the static site and publish it to the gh-pages branch.
//
//   npm run deploy
//
// BASE_PATH defaults to /Portfolio, matching the GitHub Pages project site at
// https://ayushdebnath012.github.io/Portfolio/. Override it for a custom
// domain or a root user-site:
//
//   BASE_PATH= npm run deploy        (bash)
//   $env:BASE_PATH=""; npm run deploy   (PowerShell)
//
// Written in Node rather than sh because npm on Windows runs scripts through
// cmd.exe, which has no `sh` on PATH.
//
// gh-pages holds nothing but generated output, so this force-pushes a single
// fresh commit instead of accumulating history. Never commit to that branch by
// hand — the next deploy overwrites it.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const basePath = process.env.BASE_PATH ?? "/Portfolio";

function run(cmd, args, opts = {}) {
  return execFileSync(cmd, args, {
    stdio: "inherit",
    shell: false,
    ...opts,
  });
}

function capture(cmd, args, opts = {}) {
  return execFileSync(cmd, args, { encoding: "utf8", ...opts }).trim();
}

let repoUrl;
try {
  repoUrl = capture("git", ["config", "--get", "remote.origin.url"], {
    cwd: root,
  });
} catch {
  repoUrl = "";
}
if (!repoUrl) {
  console.error("No 'origin' remote configured — nothing to deploy to.");
  process.exit(1);
}

console.log(`Building with BASE_PATH="${basePath}" ...`);
// Invoke the Next CLI through this same node binary rather than shelling out to
// npm. On Windows npm is a .cmd shim, and Node refuses to spawn those without
// shell:true — which it then warns about for concatenating args unescaped.
run(process.execPath, [path.join(root, "node_modules/next/dist/bin/next"), "build"], {
  cwd: root,
  env: { ...process.env, BASE_PATH: basePath },
});

const out = path.join(root, "out");
if (!fs.existsSync(path.join(out, "index.html"))) {
  console.error(`Build produced no index.html in ${out} — refusing to deploy.`);
  process.exit(1);
}

const stage = fs.mkdtempSync(path.join(os.tmpdir(), "portfolio-deploy-"));
try {
  fs.cpSync(out, stage, { recursive: true });

  const git = (...args) => run("git", args, { cwd: stage });
  git("init", "-q", "-b", "gh-pages");
  git("add", "-A");
  git("commit", "-q", "-m", `Deploy ${new Date().toISOString()}`);
  git("push", "-q", "-f", repoUrl, "gh-pages");

  console.log("Deployed. Pages usually serves the new build within a minute.");
} finally {
  fs.rmSync(stage, { recursive: true, force: true });
}
