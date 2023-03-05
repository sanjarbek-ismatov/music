import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import files from "./routes/filesroute";
import helmet from "helmet";
const app = express();
app.use(cors());
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./assets"));

app.use("/files", files);
app.listen(process.env.PORT || 4000, () => console.log("Listening"));
