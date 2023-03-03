import multer from "multer";
import crypto from "crypto";
import path from "path";
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./assets"),
  filename: (req, file, cb) => {
    const filename =
      crypto.randomBytes(16).toString("hex") + path.extname(file.originalname);
    return cb(null, filename);
  },
});
export const upload = multer({ storage });
