import Blog from "../models/Blog.js";
import Report from "../models/Report.js";
import { conversion } from "../utils/convert.js";

export const createReport = async (req, res, next) => {
  console.log("landed on create report");
  const newReport = new Report(req.body);

  try {
    const savedReport = await newReport.save();

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
    console.log("we got the request to delete the report ", req.query);
    await Report.findByIdAndDelete(req.query.id);
    console.log("report deleted");
    res.status(200).json("Report has been deleted.");
  } catch (err) {
    console.log("some error ", err);
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
  let industry = req.query.industry;
  let page = req.query.page || 1;
  let subind = req.query.subind || "none";

  industry = conversion(industry);
  try {
    let limit = 5;
    let skip = (page - 1) * limit;
    let data;
    if (subind == "none") {
      data = await Report.find({ industry });
    } else {
      data = await Report.find({ industry: industry, subind: subind });
    }

    let len = data.length;
    let end = Math.min(data.length, skip + limit);
    let reports = data.slice(skip, end);
    res.json({ reports, len });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllReports = async (req, res, next) => {
  try {
    let page = req.query.page || 1;
    let limit = 5;
    let skip = (page - 1) * limit;
    let data = await Report.find({});

    let len = data.length;

    let end = Math.min(data.length, skip + limit);
    let reports = data.slice(skip, end);
    res.status(200).json({ reports, len });
  } catch (err) {
    next(err);
  }
};

export const getAllBlogs = async (req, res, next) => {
  try {
    let page = req.query.page || 1;
    let limit = 5;
    let skip = (page - 1) * limit;
    let data;
    if (req.query.industry && req.query.subind) {
      let industry = req.query.ind;
      data = await Blog.find({ industry, subind });
    } else if (req.query.industry) {
      let industry = req.query.ind;

      data = await Blog.find({ industry });
    } else {
      data = await Blog.find({});
    }
    let len = data.length;
    let end = Math.min(len, skip + limit);

    let blogs = [];
    if (len != 0) {
      blogs = data.slice(skip, end);
    }
    res.status(200).json({ blogs, len });
  } catch (err) {
    next(err);
  }
};

export const getBlog = async (req, res, next) => {
  try {
    let title = req.query.title;
    const blog = await Blog.find({ title });
    res.status(200).json(blog);
  } catch (err) {
    next(err);
  }
};

export const pinReport = async (req, res, next) => {
  try {
    console.log(
      "your request for pinning this report is comming successfully to its controller"
    );
    let filter = {
      title: req.query.title,
    };
    let update = {
      pin: true,
    };
    const doc = await Report.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.status(200).json({ doc });
  } catch (err) {
    res.status(500).json({ message: "some error occured" });
  }
};

export const unpinReport = async (req, res, next) => {
  console.log("request is comming successfully to unpin this report");
  try {
    let filter = {
      title: req.query.title,
    };
    let update = {
      pin: false,
    };
    const doc = await Report.findOneAndUpdate(filter, update, {
      new: false,
    });
    res.status(200).json({ doc });
  } catch (err) {
    res.status(500).json({ message: "some error occured" });
  }
};

export const getpinReport = async (req, res, next) => {
  try {
    const reports = await Report.find({ pin: true });
    res.status(200).json({ reports });
  } catch (err) {
    res.status(500).json({ message: "some error occured" });
  }
};
