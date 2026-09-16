import { spawnSync } from "node:child_process";
import { existsSync, renameSync } from "node:fs";
import { resolve } from "node:path";

const apiDir = resolve("app/api");
const stashDir = resolve(".tmp-api");
let moved = false;

try {
  if (existsSync(apiDir)) {
    renameSync(apiDir, stashDir);
    moved = true;
  }

  const build = spawnSync("npx", ["next", "build"], {
    stdio: "inherit",
    env: { ...process.env, STATIC_EXPORT: "1" },
  });
  if (build.status !== 0) {
    process.exit(build.status ?? 1);
  }

  const copy = spawnSync("node", ["scripts/copy-turbify-hosting.mjs"], {
    stdio: "inherit",
  });
  if (copy.status !== 0) {
    process.exit(copy.status ?? 1);
  }
} finally {
  if (moved && existsSync(stashDir)) {
    renameSync(stashDir, apiDir);
  }
}
