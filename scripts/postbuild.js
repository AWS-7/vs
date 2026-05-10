import { writeFileSync } from "fs";
import { join } from "path";
import { pathToFileURL } from "url";

const clientDir = join(process.cwd(), "dist", "client");

async function main() {
  const serverPath = pathToFileURL(join(process.cwd(), "dist", "server", "index.js")).href;
  const { default: server } = await import(serverPath);
  const response = await server.fetch(new Request("http://localhost/"), {}, {});
  const html = await response.text();
  writeFileSync(join(clientDir, "index.html"), html);
  console.log("Prerendered dist/client/index.html (" + html.length + " bytes)");
}

main().catch((err) => {
  console.error("Postbuild prerender failed:", err);
  process.exit(1);
});
