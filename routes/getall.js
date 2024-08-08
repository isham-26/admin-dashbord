import express from "express";
import {
  deleteBlog,
  deleteReport,
  getAllBlogs,
  getAllReports,
  getBlog,
  getLatestInsight,
  getRelatedBlogs,
  getRep,
  getpinReport,
  pinReport,
  unpinReport,
} from "../controllers/upload.js";
import { verifyUser } from "../utils/verifyTokens.js";
import { relatedReports } from "../controllers/forReport.js";

const router = express.Router();

router.get("/report", getAllReports);
router.get("/reports", getRep);
router.get("/blogs", getAllBlogs);
router.get("/blog", getBlog);
router.delete("/report", deleteReport);
router.delete("/delete/blog", deleteBlog);
router.put("/report/pin", pinReport);
router.put("/report/unpin", unpinReport);
router.get("/pinned-report", getpinReport);
router.get("/latest-blog", getLatestInsight);
router.get("/related-blogs", getRelatedBlogs);
router.get("/reports/related", relatedReports);

export default router;
