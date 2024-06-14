import Blog from "../models/Blog.js";
import Report from "../models/Report.js";
import { conversion } from "../utils/convert.js";

export const createReport = async (req, res, next) => {
  console.log("landed on create report");
  const newReport = new Report(req.body);

  try {
    console.log("trying to save eport ", newReport);
    const savedReport = await newReport.save();
    console.log("done");
    res.status(200).json(savedReport);
  } catch (err) {
    next(err);
  }
};

export const createBlog = async (req, res, next) => {
  const newBlog = new Blog(req.body);

  try {
    const savedBlog = await newBlog.save();
    res.status(200).json(savedBlog);
  } catch (err) {
    next(err);
  }
};

export const updateReport = async (req, res, next) => {
  try {
    const updatedReport = await Report.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedReport);
  } catch (err) {
    next(err);
  }
};

export const updateBlog = async (req, res, next) => {
  try {
    const updatedBlog = await Report.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBlog);
  } catch (err) {
    next(err);
  }
};

export const deleteReport = async (req, res, next) => {
  try {
    await Report.findByIdAndDelete(req.params.id);
    res.status(200).json("Report has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const deleteBlog = async (req, res, next) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json("Blog has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getReport = async (req, res, next) => {
  try {
    const report = await Report.findById(req.params.id);
    res.status(200).json(report);
  } catch (err) {
    next(err);
  }
};

export const getRep = async (req, res, next) => {
  console.log("finally you are my frind");
  let { industry } = req.query;
  let page = req.query.page || 1;
  //industry = "shared_mobility";
  console.log("req query ", industry);
  industry = conversion(industry);
  try {
    let limit = 10;
    let skip = (page - 1) * limit;
    const reports = await Report.find({ industry }).skip(skip).limit(limit);
    console.log("reports are ");
    console.log(reports);
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllReports = async (req, res, next) => {
  try {
    console.log("my friend you are on get all report controller");
    let page = req.query.page || 1;
    let limit = 10;
    let skip = (page - 1) * limit;
    const reports = await Report.find({}).skip(skip).limit(limit);
    res.status(200).json(reports);
  } catch (err) {
    next(err);
  }
};

export const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (err) {
    next(err);
  }
};
