import express from "express";
import { createBlog, createReport } from "../controllers/upload.js";
import { verifyUser } from "../utils/verifyTokens.js";

const router = express.Router();

router.post("/uploadreport", createReport);
router.post("/uploadblog", createBlog);

export default router;
