import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const outDir = resolve("out");
if (!existsSync(outDir)) {
  throw new Error("out/ is missing. Run STATIC_EXPORT=1 next build first.");
}

copyFileSync(resolve("hosting/inquiry.php"), resolve("out/inquiry.php"));
copyFileSync(resolve("hosting/.htaccess"), resolve("out/.htaccess"));
console.log("Copied Turbify hosting files into out/");
