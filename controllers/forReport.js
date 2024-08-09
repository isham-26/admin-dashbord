// import Blog from "../models/Blog.js";
import Report from "../models/Report.js";
// import { conversion } from "../utils/convert.js";

export const relatedReports = async (req, res, next) => {
  try {
    console.log("request is coming for  related reports");
    // let col = req.body.related;
    // console.log("requested title for the blogs is ", title);
    const related = await Report.find({
      $or: [{ id: req.query.f }, { id: req.query.s }, { id: req.query.t }],
    });
    console.log("related reports are ", related);
    res.status(200).json(related);
  } catch (err) {
    res.status(500).json({
      message: "some error occured",
    });
  }
};
