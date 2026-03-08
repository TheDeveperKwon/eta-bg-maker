import { access, cp, mkdir, rm, writeFile } from "node:fs/promises";
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

async function pathExists(targetPath) {
  try {
    await access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function copyStaticFile(filePath) {
  const sourcePath = path.join(rootDir, filePath);

  if (!(await pathExists(sourcePath))) {
    return;
  }

  await cp(sourcePath, path.join(distDir, filePath));
}

async function copyStaticDir(dirPath) {
  const sourcePath = path.join(rootDir, dirPath);

  if (!(await pathExists(sourcePath))) {
    return;
  }

  await cp(sourcePath, path.join(distDir, dirPath), {
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
