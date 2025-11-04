// index.js (or server.js)
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./src/database/db.js";
import messageRouter from "./src/routes/user_message.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello Server");
});

app.use("/api/v1", messageRouter);

// ✅ Export app for Vercel serverless
export default app;

// ✅ Only run the server locally (not on Vercel)
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 8000;

  const startServer = async () => {
    try {
      await sequelize.authenticate();
      console.log("Database connected successfully");
      await sequelize.sync({ force: false });

      app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
      });
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      process.exit(1);
    }
  };

  startServer();
}
