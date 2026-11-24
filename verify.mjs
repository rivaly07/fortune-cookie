#!/usr/bin/env node
import { execSync } from "child_process";
import { readFileSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_DIR = __dirname;

function runOnce() {
  const tmpOut = join(tmpdir(), `fortune-verify-${Date.now()}-${Math.random().toString(36).slice(2)}`);
  execSync(`node --import=tsx main.ts`, {
    cwd: PROJECT_DIR,
    env: { ...process.env, MAKEFUN_OUTPUT_DIR: tmpOut },
    stdio: "ignore",
  });
  return readFileSync(join(tmpOut, "entry.txt"));
}

function main() {
  const run1 = runOnce();
  const run2 = runOnce();

  if (run1.equals(run2)) {
    console.log("OK: byte-identical output");
    console.log("Content:", run1.toString("utf8"));
    console.log("Bytes:", run1.length);
    process.exit(0);
  } else {
    console.error("FAIL: outputs differ");
    console.error("Run 1:", run1.toString("utf8"));
    console.error("Run 2:", run2.toString("utf8"));
    process.exit(1);
  }
}

main();