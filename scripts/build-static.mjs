import { spawnSync } from "node:child_process";
import { existsSync, renameSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const apiDir = resolve("app/api");
const stashDir = resolve(".tmp-api");
let moved = false;

function restoreApi() {
  if (moved && existsSync(stashDir) && !existsSync(apiDir)) {
    renameSync(stashDir, apiDir);
    moved = false;
  }
}

process.on("exit", restoreApi);
process.on("SIGINT", () => {
  restoreApi();
  process.exit(130);
});

if (existsSync(apiDir)) {
  renameSync(apiDir, stashDir);
  moved = true;
}
rmSync(resolve(".next"), { recursive: true, force: true });

const build = spawnSync("npx", ["next", "build"], {
  stdio: "inherit",
  env: { ...process.env, STATIC_EXPORT: "1" },
});
if (build.status !== 0) {
  restoreApi();
  process.exit(build.status ?? 1);
}

const copy = spawnSync("node", ["scripts/copy-turbify-hosting.mjs"], {
  stdio: "inherit",
});
restoreApi();
if (copy.status !== 0) {
  process.exit(copy.status ?? 1);
}
