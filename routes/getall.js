import express from "express";
import {
  getAllBlogs,
  getAllReports,
  getBlog,
  getRep,
} from "../controllers/upload.js";
import { verifyUser } from "../utils/verifyTokens.js";

const router = express.Router();

router.get("/report", getAllReports);
router.get("/reports", getRep);
router.get("/blogs", getAllBlogs);
router.get("/blog", getBlog);
//router.post("/uploadblog", verifyUser, createBlog);

export default router;
