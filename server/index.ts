import bodyParser from "body-parser";
import express from "express";
import files from "./routes/filesroute";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/files", files);
app.listen(process.env.PORT || 4000, () => console.log("Listening"));
