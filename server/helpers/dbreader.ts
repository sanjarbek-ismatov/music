import fs from "fs";
import path from "path";
export interface Audio {
  title: string;
  author: string;
  audio?: string;
}
export function dbReader() {
  try {
    const data = fs.readFileSync(path.resolve(__dirname, "../db/audios.json"), {
      encoding: "utf-8",
    });
    return JSON.parse(data) as Audio[];
  } catch (ex) {
    fs.writeFileSync(path.resolve(__dirname, "../db/audios.json"), "[]");
    const data = fs.readFileSync(path.resolve(__dirname, "../db/audios.json"), {
      encoding: "utf-8",
    });
    return JSON.parse(data) as Audio[];
  }
}
export function dbWriter(body: Audio) {
  const data = dbReader();
  data.unshift(body);
  fs.writeFileSync(
    path.resolve(__dirname, "../db/audios.json"),
    JSON.stringify(data)
  );
}
