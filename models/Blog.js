import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
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
    metaDesc: {
      type: String,
    },
    metaKey: {
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
