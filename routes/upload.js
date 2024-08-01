import express from "express";
import { createBlog, createReport } from "../controllers/upload.js";
import { verifyUser } from "../utils/verifyTokens.js";
import { cReport } from "../controllers/updatedReport.js";

const router = express.Router();

router.post("/uploadreport", createReport);
router.post("/uploadblog", createBlog);
router.post("/ureport", cReport);

export default router;
