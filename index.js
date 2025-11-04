import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectdb from "./src/database/db.js";
import router from "./src/routes/user_message.routes.js";

// ✅ Load environment variables once
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// ✅ CORS Configuration (allow frontend + local dev)
app.use(
  cors({
    origin: [
      "https://ennovatriz.vercel.app", // your live frontend
      "http://localhost:3000", // optional: for local testing
    ],
    credentials: true,
  })
);

// ✅ Middleware
app.use(express.json());
app.use(urlencoded({ extended: false }));

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("✅ Server is running successfully!");
});

// ✅ API Routes
app.use("/api/v1", router);

// ✅ Database connection + server start
connectdb()
  .then(() => {
    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
    process.exit(1); // exit if DB fails to connect
  });
