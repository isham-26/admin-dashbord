import express from "express";
import {
  createBlog,
  createReport,
  getAllReports,
  getRep,
} from "../controllers/upload.js";
import { verifyUser } from "../utils/verifyTokens.js";

const router = express.Router();

router.get("/report", getAllReports);
router.get("/reports", getRep);
//router.post("/uploadblog", verifyUser, createBlog);

export default router;
