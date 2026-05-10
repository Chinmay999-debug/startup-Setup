import { copyFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outDir = "dist/pages";
const builtIndex = join(outDir, "pages/index.html");

await copyFile(builtIndex, join(outDir, "index.html"));
await copyFile(builtIndex, join(outDir, "404.html"));
await writeFile(join(outDir, ".nojekyll"), "");
