import mongoose from "mongoose";
const ReportSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    linkp: {
      type: String,
      required: true,
      unique: true,
    },
    linki: {
      type: String,
      required: true,
      unique: true,
    },
    industry: {
      type: String,
      required: true,
    },
    subind: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Report", ReportSchema);
