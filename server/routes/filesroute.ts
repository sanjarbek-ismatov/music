import express from "express";
import path from "path";
import { Audio, dbReader, dbWriter } from "../helpers/dbreader";
import { upload } from "../models/storagemodel";
const router = express.Router();
router.post("/upload", upload.single("audio"), (req, res) => {
  const { title, author } = req.body;
  console.log(title, author, req.file?.filename);
  if (title && author && req.file?.filename) {
    const audio: Audio = {
      title,
      author,
      audio: req.file?.filename,
    };
    dbWriter(audio);
    res.status(201).send("Success!");
  } else res.status(400).send("Bad request");
});
router.get("/", (req, res) => {
  const data = dbReader();
  if (!data) return res.status(404).send("No Music");
  res.status(200).send(data);
});
router.get("/audio/:filename", (req, res) => {
  try {
    res
      .status(200)
      .sendFile(path.resolve(__dirname, "../assets/", req.params.filename));
  } catch (ex: any) {
    return res.status(404).send(new Error(ex).message);
  }
});
export default router;
