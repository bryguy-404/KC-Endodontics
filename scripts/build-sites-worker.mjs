import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { extname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const outputRoot = join(projectRoot, "dist");
const serverRoot = join(outputRoot, "server");

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === "server" || entry.name === ".openai") continue;
    const absolutePath = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await listFiles(absolutePath)));
    if (entry.isFile()) files.push(absolutePath);
  }

  return files;
}

const assets = {};

for (const absolutePath of await listFiles(outputRoot)) {
  const assetPath = relative(outputRoot, absolutePath).split(sep).join("/");
  const extension = extname(assetPath).toLowerCase();
  assets[assetPath] = {
    body: (await readFile(absolutePath)).toString("base64"),
    contentType: contentTypes[extension] ?? "application/octet-stream",
  };
}

const workerSource = `const assets = ${JSON.stringify(assets)};

function decode(base64) {
  const binary = atob(base64);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

function resolveAsset(pathname) {
  const decoded = decodeURIComponent(pathname).replace(/^\\/+/, "");
  if (!decoded) return "index.html";
  if (assets[decoded]) return decoded;
  if (assets[decoded + ".html"]) return decoded + ".html";
  const nestedIndex = decoded.replace(/\\/+$/, "") + "/index.html";
  if (assets[nestedIndex]) return nestedIndex;
  return null;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const assetPath = resolveAsset(url.pathname);

    if (!assetPath) {
      return new Response("Not found", {
        status: 404,
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }

    const asset = assets[assetPath];
    const immutable = assetPath.startsWith("_astro/");
    const headers = {
      "content-type": asset.contentType,
      "cache-control": immutable
        ? "public, max-age=31536000, immutable"
        : "public, max-age=300",
      "x-content-type-options": "nosniff",
    };

    return new Response(request.method === "HEAD" ? null : decode(asset.body), {
      status: 200,
      headers,
    });
  },
};
`;

await mkdir(serverRoot, { recursive: true });
await writeFile(join(serverRoot, "index.js"), workerSource);

console.log(`Sites worker packaged ${Object.keys(assets).length} static assets.`);
