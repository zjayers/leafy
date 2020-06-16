import { ensureDirSync } from "https://deno.land/std/fs/mod.ts";
import { ensureFileSync } from "https://deno.land/std/fs/mod.ts";

/* Create Directories */
const dirs: Array<string> = [
  "server",
  "server/src",
  "server/src/config",
  "server/src/controllers",
  "server/src/dev-data",
  "server/src/dev-data/seeds",
  "server/src/database",
  "server/src/models",
  "server/src/middleware",
  "server/public",
  "server/public/css",
  "server/public/img",
  "server/public/fonts",
  "server/public/js",
  "server/src/routes",
  "server/src/spec",
  "server/src/spec/controllers",
  "server/src/spec/database",
  "server/src/spec/models",
  "server/src/spec/routes",
  "server/src/spec/utils",
  "server/src/spec/views",
  "server/src/utils",
  "server/src/views",
  "client",
  "client/src",
  "client/src/config",
  "client/public",
  "client/public/css",
  "client/public/img",
  "client/public/fonts",
  "client/public/js",
  "client/src/components",
  "client/src/components/App",
  "client/src/shared",
  "client/src/services",
  "client/src/store",
  "client/src/store/middleware",
  "client/src/store/actions",
  "client/src/store/reducers",
  "client/src/store/slices",
  "client/src/spec",
  "client/src/spec/components",
  "client/src/spec/shared",
  "client/src/spec/services",
  "client/src/spec/store",
];

const files: Array<string> = [
  "server/webpack.config.js",
  "server/.eslintrc.json",
  "server/.prettierrc",
  "server/.babelrc",
  "server/README.md",
  "server/Gulpfile.js",
  "server/index.js",
  "server/app.js",
  "server/src/spec/index.js",
  "server/src/spec/app.js",
  "server/src/spec/database/database.js",
  "server/src/config/.env",
  "server/public/index.html",
  "client/webpack.config.js",
  "client/.eslintrc.json",
  "client/.prettierrc",
  "client/.babelrc",
  "client/README.md",
  "client/Gulpfile.js",
  "client/src/config/.env",
  "client/src/index.jsx",
  "client/src/index.style.scss",
  "client/public/index.html",
  "client/src/store/configureStore.js",
  "client/src/components/App.jsx",
  "client/src/components/App.style.scss",
  "client/src/spec/components/App.spec.js",
  "client/src/spec/index.spec.js",
];

dirs.forEach((dir: string): void => {
  ensureDirSync(dir);
});

files.forEach((file: string): void => {
  ensureFileSync(file);
});

console.log("Directories Added!");
console.log("Files Added!");
