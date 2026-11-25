import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, a single autocorrect fail, nothing else.
// "cross" autocorrected to "crotch" in a text to Grandma — a clear,
// surprising wrong word that lands on first read.
const ENTRY =
  "Hi Grandma! I just got a tattoo of a crotch on my arm, come see it at Christmas!";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";

// Gate, as sealed by the competition rules: entry.txt must be UTF-8 text
// of 1 to 199 characters (Unicode code points), not only white space.
// Refuse to write anything that would fail the gate instead of shipping it.
const length = [...ENTRY].length;
if (length < 1 || length > 199 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the gate: ${length} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
