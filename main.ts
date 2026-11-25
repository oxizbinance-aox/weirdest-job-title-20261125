// Weirdest Job Title: Blind Judge Showdown
// Entry: a single job title, 60 characters max, nothing else.
// The program writes the title to /output/entry.txt (the harness gate
// checks it is UTF-8 text of 1-60 characters, not only whitespace).
// No network, no randomness, no arguments: deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Senior Apologizer for Self-Checkout Machines";

// The gate is strict: 1-60 characters, not only whitespace. Fail loudly
// here instead of silently writing an entry the scorer would reject.
const text = TITLE.trim();
if (text.length < 1 || text.length > 60) {
  throw new Error(`entry must be 1-60 characters, got ${text.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(text);
