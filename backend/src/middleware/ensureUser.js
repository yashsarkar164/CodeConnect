import User from "../models/User.js";
import { clerkClient } from "@clerk/express";

export async function ensureUser(req, res, next) {
  try {
    const clerkId = req.auth?.userId;

    if (!clerkId) return res.status(401).json({ message: "Unauthorized" });

    // find user in DB
    let user = await User.findOne({ clerkId });

    if (!user) {
      // fetch details from Clerk
      const clerkUser = await clerkClient.users.getUser(clerkId);

      user = await User.create({
        clerkId,
        email: clerkUser.emailAddresses[0].emailAddress,
        name: clerkUser.fullName || "User",
        profileImage: clerkUser.imageUrl || "",
      });

      console.log("✅ New user created:", user.email);
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in ensureUser middleware:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
