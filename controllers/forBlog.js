export const createBlog = async (req, res, next) => {
  const newBlog = new Blog(req.body);
  console.log("request is coming for uploading a new blog ", req.body);

  try {
    const savedBlog = await newBlog.save();
    res.status(200).json(savedBlog);
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

export const deleteBlog = async (req, res, next) => {
  try {
    await Blog.findByIdAndDelete(req.query.id);
    res.status(200).json("Blog has been deleted.");
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
    console.log("requested title for the blogs is ", title);
    const blog = await Blog.find({ title });
    res.status(200).json(blog);
  } catch (err) {
    next(err);
  }
};
