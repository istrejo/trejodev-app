import { existsSync } from "node:fs";
import { join } from "node:path";

const required = [
  "public/cv/alejandro-trejo-cv-en.pdf",
  "public/cv/alejandro-trejo-cv-es.pdf",
];
const missing = required.filter(
  (path) => !existsSync(join(process.cwd(), path)),
);

if (missing.length > 0) {
  console.error("Release readiness blocked. Missing required CV assets:");
  for (const path of missing) {
    console.error(`- ${path}`);
  }
  console.error(
    "Provide the final PDFs or intentionally approved placeholders before Firebase deploy.",
  );
  process.exit(1);
}

console.log("CV assets are present.");
