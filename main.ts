import * as fs from "node:fs";

// One single-line one-star review of an everyday essential, for
// make.fun "One-Star Review of Something Essential": a deadpan complaint
// against sleep — it promises eight hours of rest, then spends the night
// replaying one awkward thing from 2019. The sharpest true grievance,
// held deadpan, with the sting arriving in the last few words.
const text =
  "One star. Sleep promises eight hours of rest, then spends the night replaying an awkward thing I said in 2019.";

// The gate allows 1–160 characters: refuse loudly instead of ever
// writing a text outside it.
if ([...text].length < 1 || [...text].length > 160 || text.trim() === "") {
  throw new Error("entry must be 1-160 characters");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
