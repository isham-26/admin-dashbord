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
    linkf: {
      type: String,
    },
    linkt: {
      type: String,
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
    dataSuite: {
      type: String,
    },
    insightReport: {
      type: String,
    },
    metaTitle: {
      type: String,
    },
    metaDesc: {
      type: String,
    },
    metaKey: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Report", ReportSchema);
