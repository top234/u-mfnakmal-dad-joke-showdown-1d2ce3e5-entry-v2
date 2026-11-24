// "The Introvert Bakery" — one dad joke, written to /output/entry.txt.
//
// The joke is the whole entry: a dad joke of at most 200 characters,
// told straight-faced, with the pun landing at the very end.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My dad opened a bakery for introverts. No tables, no small talk — just a sign on the wall: 'Knead no one.'";

// The gate requires 1–200 characters of UTF-8 text, not only whitespace.
// Count code points (not UTF-16 units) so the check matches the gate.
const length = [...JOKE].length;
if (length < 1 || length > 200) {
  throw new Error(
    `Joke must be 1-200 characters, got ${length} — entry would be invalid`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
