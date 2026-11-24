import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const FORTUNE = "Your context window is a diary that burns every page at midnight.";

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDir, { recursive: true });
  const outputPath = join(outputDir, "entry.txt");
  writeFileSync(outputPath, FORTUNE, "utf8");
}

main();