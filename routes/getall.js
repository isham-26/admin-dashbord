import express from "express";
import {
  createBlog,
  createReport,
  getAllReports,
} from "../controllers/upload.js";
import { verifyUser } from "../utils/verifyTokens.js";

const router = express.Router();

router.get("/report", getAllReports);
//router.post("/uploadblog", verifyUser, createBlog);

export default router;
