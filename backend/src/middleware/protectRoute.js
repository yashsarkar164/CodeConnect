import { requireAuth } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId; // ← your Clerk version requires this

      if (!clerkId) {
        console.log("❌ No clerkId found in req.auth()");
        return res.status(401).json({ message: "Unauthorized - invalid token" });
      }

      // only check DB *after ensureUser runs*
      const user = await User.findOne({ clerkId });

      if (!user) {
        console.log("❌ User NOT found in DB (after ensureUser)");
        return res.status(404).json({ message: "User not found" });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error("Error in protectRoute middleware", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];
