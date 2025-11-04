import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectdb from "./src/database/db.js";
import router from "./src/routes/user_message.routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      // "https://microfinance-app-frontend-phi.vercel.app",
      // "https://microfinance-app-dashboard.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("HELLO SERVER");
});
app.use("/api/v1", router);

connectdb()
  .then(() => {
    app.listen(port, () => {
      console.log("SERVER IS RUNNING AT PORT", port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
