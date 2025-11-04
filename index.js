import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./src/database/db.js";
import messageRouter from "./src/routes/user_message.routes.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello Server");
});
app.use("/api/v1", messageRouter);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");
    await sequelize.sync({ force: false });
    
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
};

startServer();
