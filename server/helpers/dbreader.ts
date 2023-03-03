import fs from "fs";
import path from "path";
export interface Audio {
  title: string;
  author: string;
  audio?: string;
}
const filePath = path.resolve(__dirname, "./db/audios.json");
export function dbReader() {
  try {
    const data = fs.readFileSync(filePath, {
      encoding: "utf-8",
    });
    return JSON.parse(data) as Audio[];
  } catch (ex) {
    fs.writeFileSync(filePath, "[]");
    const data = fs.readFileSync(filePath, {
      encoding: "utf-8",
    });
    return JSON.parse(data) as Audio[];
  }
}
export function dbWriter(body: Audio) {
  const data = dbReader();
  data.unshift(body);
  fs.writeFileSync(filePath, JSON.stringify(data));
}
