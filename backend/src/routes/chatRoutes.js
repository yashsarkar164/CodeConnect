import express from "express";
import { getStreamToken } from "../controllers/chatController.js";
import { protectRoute } from "../middleware/protectRoute.js";
import { ensureUser } from "../middleware/ensureUser.js";

const router = express.Router();

router.get("/token", protectRoute, ensureUser, getStreamToken);

export default router;
