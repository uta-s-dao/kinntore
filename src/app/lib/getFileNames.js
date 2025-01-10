// app/lib/getFileNames.js
import fs from "fs";
import path from "path";

export function getFileNames(directory) {
  const dirPath = path.join(process.cwd(), directory);
  return fs.readdirSync(dirPath).map((fileName) => `/images/${fileName}`);
}
