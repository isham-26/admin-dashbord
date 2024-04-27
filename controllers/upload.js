import Blog from "../models/Blog.js";
import Report from "../models/Report.js";

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

export const getAllReports = async (req, res, next) => {
  try {
    console.log("my friend you are on get all report controller");
    const reports = await Report.find({});
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
