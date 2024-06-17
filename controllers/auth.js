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

    const resp = await newUser.save();

    const { others, username, email } = resp;
    res.status(200).send({ username, email });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign({ id: user._id }, process.env.JWT);

    const { password, name, email, ...otherDetails } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "None",
      })
      .status(200)
      .json({ details: { name, email } });
  } catch (err) {
    next(err);
  }
};
