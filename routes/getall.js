import express from "express";
import {
  deleteBlog,
  deleteReport,
  getAllBlogs,
  getAllReports,
  getBlog,
  getRep,
  getpinBlog,
  pinBlog,
  unpinBlog,
} from "../controllers/upload.js";
import { verifyUser } from "../utils/verifyTokens.js";

const router = express.Router();

router.get("/report", getAllReports);
router.get("/reports", getRep);
router.get("/blogs", getAllBlogs);
router.get("/blog", getBlog);
router.delete("/report", deleteReport);
router.put("/blog/pin", pinBlog);
router.get("/blog/unpin", unpinBlog);
router.get("/pin-report", getpinBlog);

export default router;
