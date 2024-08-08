import Report from "../models/Report.js";

export const cReport = async (req, res, next) => {
  console.log("landed on create report ", req);
  let rep = {
    title: req.body.title,
    slug: req.body.slug,
    shortTitle: req.body.shortTitle,
    desc: req.body.shortTitle,
    subTitle: req.body.subTitle,
    metaTitle: req.body.metaTitle,
    geography: req.body.geographyTag,
    country: req.body.countryRegion,
    pSingle: req.body.priceSingle,
    pTeam: req.body.priceTeam,
    pCorp: req.body.priceCorporate,
    pDate: req.body.publishedDate,
    rReports: req.body.relatedReports,
    industry: req.body.category,
    subind: req.body.subCategory,
    metaKey: req.body.metaKeywords,
    metaDesc: req.body.metaDescription,
    msHeading: req.body.msHeading,
    msDesc: req.body.msContent,
    msTable: req.body.msTables,
    moTitle: req.body.moHeading,
    moDesc: req.body.moContent,
    sorTitle: req.body.srHeading,
    sorDesc: req.body.srContent,
    clTitle: req.body.clHeading,
    clDesc: req.body.Content,
    mp: req.body.mpCompanies,
    mpTitle: req.body.mpHeading,
    toc: req.body.tocContent,
    faqTitle: req.body.fsHeading,
    faqs: req.body.fsFaqs,
    rDevDesc: req.body.rdContent,
    rDevTitle: req.body.rdHeading,
    kmtTitle: req.body.ktHeading,
    kmtdesc1: req.body.ktContent1,
    kmti1: req.body.ktImage,
    kmti1alt: req.body.ktImageAlt1,
    kmtsh1: req.body.ktSubHeading,
    kmtdesc2: req.body.ktContent2,
    kmtsh2: req.body.ktSubHeading2,
    kmti2: req.body.ktImage2,
    kmti2alt: req.body.ktImageAlt2,
    base: "",
    forcast: "",
    study: "",
    linki1: req.body.linki1,
    linki2: req.body.linki2,
    alti1: req.body.alti1,
    alti2: req.body.alti2,
    related: req.body.related ?? "",
  };
  console.log("started");
  const newReport = new Report(rep);
  console.log("started 2");

  try {
    console.log("started 3");
    const savedReport = await newReport.save();
    console.log("started 4");

    res.status(200).json(savedReport);
  } catch (err) {
    console.log("erorr occured ", err);
    next(err);
  }
};
