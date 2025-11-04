import express from "express";
import { userMessage } from "../controllers/user_message.controllers.js";

const router = express.Router();

router.post("/usermessage", userMessage);

export default router;
