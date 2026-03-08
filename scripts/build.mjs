import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const staticFiles = ["index.html", "styles.css", "app.js", "analytics.js"];
const staticDirs = ["assets"];

function readEnv(name) {
  const value = process.env[name];
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function buildAnalyticsConfig() {
  const config = {
    gaMeasurementId: readEnv("ETA_GA_MEASUREMENT_ID"),
    clarityProjectId: readEnv("ETA_CLARITY_PROJECT_ID"),
    debug: ["1", "true", "yes"].includes(
      (process.env.ETA_ANALYTICS_DEBUG || "").trim().toLowerCase(),
    ),
  };

  return `window.__ETA_ANALYTICS__ = Object.freeze(${JSON.stringify(config, null, 2)});\n`;
}

async function copyStaticFile(filePath) {
  await cp(path.join(rootDir, filePath), path.join(distDir, filePath));
}

async function copyStaticDir(dirPath) {
  await cp(path.join(rootDir, dirPath), path.join(distDir, dirPath), {
    recursive: true,
  });
}

async function main() {
  await rm(distDir, { recursive: true, force: true });
  await mkdir(distDir, { recursive: true });

  await Promise.all(staticFiles.map(copyStaticFile));
  await Promise.all(staticDirs.map(copyStaticDir));
  await writeFile(path.join(distDir, "analytics-config.js"), buildAnalyticsConfig(), "utf8");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
