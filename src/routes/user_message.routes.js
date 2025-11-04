import express from "express";
import { userMessage } from "../controllers/user_message.controllers.js";

const router = express.Router();

router.post("/usermessage", userMessage, (req, res) => {
  console.log(req, "debug request");
});

export default router;
