import catchAsyncErrors from "./catchAsyncErrors";
import ErrorHandler from "../utils/errorHandler";
import jwt from "jsonwebtoken";

//
// For jsonwebtoken
const authUser = catchAsyncErrors(async (req, res, next) => {
  let tmp = req.headers.authorization;
  console.log("tmp", tmp);
  const token = tmp ? tmp.slice(7, tmp.length) : "";

  if (!token) {
    return next(new ErrorHandler("token", 401));
  }
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      return next(new ErrorHandler("Login first to access this resource", 401));
    }
    req.user = user;
    next();
  });
});

//
// Handling user roles
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role (${req.user.role}) is not allowed to access this resource.`,
          403
        )
      );
    }

    next();
  };
};

export { authUser, authorizeRoles };
