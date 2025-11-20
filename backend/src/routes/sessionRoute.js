import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { ensureUser } from "../middleware/ensureUser.js";

import {
  createSession,
  endSession,
  getActiveSessions,
  getMyRecentSessions,
  getSessionById,
  joinSession,
} from "../controllers/sessionController.js";

const router = express.Router();

router.post("/", ensureUser, protectRoute, createSession);
router.get("/active", ensureUser, protectRoute, getActiveSessions);
router.get("/my-recent", ensureUser, protectRoute, getMyRecentSessions);

router.get("/:id", ensureUser, protectRoute, getSessionById);
router.post("/:id/join", ensureUser, protectRoute, joinSession);
router.post("/:id/end", ensureUser, protectRoute, endSession);



export default router;
