import mongoose from "mongoose";
const ReportSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
    },
    shortTitle: {
      type: String,
    },
    subTitle: {
      type: String,
    },

    geography: {
      type: String,
    },
    country: {
      type: String,
    },
    pSingle: {
      type: String,
    },
    pTeam: {
      type: String,
    },
    pCorp: {
      type: String,
    },
    pDate: {
      type: String,
    },
    rReports: {
      type: String,
    },
    linki1: {
      type: String,
    },
    linki2: {
      type: String,
    },
    alti1: {
      type: String,
    },
    alti2: {
      type: String,
    },

    industry: {
      type: String,
      // required: true,
    },
    subind: {
      type: String,
      // required: true,
    },
    desc: {
      type: String,
      // required: true,
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
    base: {
      type: String,
    },
    forcast: {
      type: String,
    },
    study: {
      type: String,
    },
    pin: {
      type: Boolean,
      default: false,
    },
    msHeading: {
      type: String,
    },
    msDesc: {
      type: String,
    },
    msTable: {
      type: Array,
    },
    moTitle: {
      type: String,
    },
    moDesc: {
      type: String,
    },
    sorTitle: {
      type: String,
    },
    sorDesc: {
      type: String,
    },
    kmtTitle: {
      type: String,
    },
    kmtsh1: {
      type: String,
    },
    kmtdesc1: {
      type: String,
    },
    kmti1: {
      type: String,
    },
    kmti1alt: {
      type: String,
    },
    kmtsh2: {
      type: String,
    },
    kmtdesc2: {
      type: String,
    },
    kmti2: {
      type: String,
    },
    kmti2alt: {
      type: String,
    },
    clTitle: {
      type: String,
    },
    clDesc: {
      type: String,
    },

    mp: {
      type: Array,
    },
    mpTitle: {
      type: String,
    },
    rDevTitle: {
      type: String,
    },
    rDevDesc: {
      type: String,
    },
    faqTitle: {
      type: String,
    },
    faqs: {
      type: Array,
    },
    toc: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Report", ReportSchema);
