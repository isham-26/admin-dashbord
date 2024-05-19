import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
  console.log("token verification started");
  console.log(req.cookies.access_token);
  const token = req.cookies.access_token;
  if (!token) {
    console.log("token hi nhi mila");
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    console.log("token hi galat tha");
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      console.log("verification done");
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};
