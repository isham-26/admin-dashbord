import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
    industry: {
      type: String,
    },
    subind: {
      type: String,
    },
    metaTitle: {
      type: String,
    },
    MetaDesc: {
      type: String,
    },
    MetaKey: {
      type: String,
    },
    altThumb: {
      type: String,
    },
    altPdf: {
      type: String,
    },
    linkp: {
      type: String,
    },
    linkt: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", BlogSchema);
