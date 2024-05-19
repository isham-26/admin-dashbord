import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });
    // const newUser = new User({
    //   username: "gautammm123",
    //   name: "sidhart gautamm",
    //   email: "gautammm123@gmail.com",
    //   phone: "746199046",
    //   password: "qwerty123",
    // });

    const resp = await newUser.save();
    console.log("finished");
    const { others, username, email } = resp;
    res.status(200).send({ username, email });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    console.log("you reached here comfortably my friend");
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));
    console.log("till here you are safe");

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));
    console.log("till this also");
    const token = jwt.sign({ id: user._id }, process.env.JWT);
    console.log("token is ", token);

    const { password, name, email, ...otherDetails } = user._doc;
    console.log("nvnsbnsb baby");
    res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "None",
      })
      .status(200)
      .json({ details: { name, email } });
  } catch (err) {
    console.log("you landed on wrong place brother");
    next(err);
  }
};
