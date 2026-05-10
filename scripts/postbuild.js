import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const clientDir = join(process.cwd(), "dist", "client");
const assetsDir = join(clientDir, "assets");

function listFiles(dir, ext) {
  try {
    return readdirSync(dir).filter((f) => f.endsWith(ext));
  } catch {
    return [];
  }
}

const cssFiles = listFiles(assetsDir, ".css");
const jsFiles = listFiles(assetsDir, ".js");

// Pick the largest index-*.js as the main entry (chunks are typically smaller)
const indexJsFiles = jsFiles.filter((f) => f.startsWith("index-"));
let mainJs = jsFiles[0];
if (indexJsFiles.length > 0) {
  const sizes = indexJsFiles.map((f) => {
    const stat = readFileSync(join(assetsDir, f));
    return { f, size: stat.length };
  });
  sizes.sort((a, b) => b.size - a.size);
  mainJs = sizes[0].f;
}

const cssLinks = cssFiles.map((f) => `<link rel="stylesheet" crossorigin href="/assets/${f}" />`).join("\n  ");
const jsScripts = jsFiles
  .filter((f) => f !== mainJs)
  .map((f) => `<link rel="modulepreload" crossorigin href="/assets/${f}" />`)
  .join("\n  ");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>VS Electrical Services & Maintenance</title>
  <meta name="description" content="Trusted industrial electrical, commercial, solar and HT/LT cable services since 2019. 800MW+ of solar project experience across India." />
  <meta property="og:title" content="VS Electrical Services & Maintenance" />
  <meta property="og:description" content="Industrial • Commercial • Solar • Maintenance. Engineered electrical execution since 2019." />
  <meta property="og:type" content="website" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ${cssLinks}
  ${jsScripts}
</head>
<body>
  <div id="app"></div>
  <script type="module" crossorigin src="/assets/${mainJs}"></script>
</body>
</html>`;

writeFileSync(join(clientDir, "index.html"), html);
console.log("Generated dist/client/index.html");
