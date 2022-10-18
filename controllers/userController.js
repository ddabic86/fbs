import UserModel from "../models/UserModel";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import cloudinary from "cloudinary";
import absoluteUrl from "next-absolute-url";
import ErrorHandler from "../utils/errorHandler";
import crypto from "crypto";
import { validateEmail, validateUsername } from "../utils/validation";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/tokens";
import { sendVerificationEmail } from "../utils/mailer";

////////////////////////////////
//  Register user name   =>   /api/signup/register
const registerUser = catchAsyncErrors(async (req, res, next) => {
  const {
    first_name,
    last_name,
    email,
    password,
    username,
    bYear,
    bMonth,
    bDay,
    gender,
  } = req.body;

  //    check if email already exists
  const duplicate = await UserModel.findOne({ email });
  //    hash the password
  const hashPassword = await bcrypt.hash(password, 12);

  const notValid = !validateEmail(email);

  if (duplicate) {
    return next(new ErrorHandler("Esiste già un utente con questa email", 404));
  }

  if (notValid) {
    return next(new ErrorHandler("Inserisci un'email valida", 404));
  }

  let tempUsername = first_name + last_name;
  let newUsername = await validateUsername(tempUsername);

  const user = await new UserModel({
    first_name,
    last_name,
    email,
    password: hashPassword,
    username: newUsername,
    bYear,
    bMonth,
    bDay,
    gender,
  }).save();

  const emailVerificationToken = generateToken(
    { id: user._id.toString() },
    "30m"
  );

  const { origin } = absoluteUrl(req);

  const url = `${origin}/signup/activate/${emailVerificationToken}`;

  sendVerificationEmail(user.email, user.first_name, url);

  const token = generateToken({ id: user._id.toString() }, "7d");
  res.send({
    id: user._id,
    username: user.username,
    picture: user.picture,
    first_name: user.first_name,
    last_name: user.last_name,
    token: token,
    verified: user.verified,
    message: "Register Success ! please activate your email to start",
  });
});

////////////////////////////////
//  Activate account  =>   /api/signup/activate
const activateUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.body;
  const user = jwt.verify(token, process.env.TOKEN_SECRET);

  const check = await UserModel.findById(user.id);

  if (check.verified == true) {
    return next(new ErrorHandler("This email is already activated.", 400));
  } else {
    await UserModel.findByIdAndUpdate(user.id, { verified: true });
    return res
      .status(200)
      .json({ message: "Account has beeen activated successfully." });
  }
});

////////////////////////////////
//  Login the user  =>   /api/login
const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email }).select("+password");
  if (!user) {
    return next(
      new ErrorHandler(
        "the email address you entered is not connected to an account.",
        400
      )
    );
  }

  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    return next(new ErrorHandler("Invalid credentials.Please try again.", 400));
  }

  const token = generateToken({ id: user._id.toString() }, "7d");

  res.send({
    message: `${user.username} is logged in`,
    id: user._id,
    username: user.username,
    picture: user.picture,
    first_name: user.first_name,
    last_name: user.last_name,
    token: token,
    verified: user.verified,
  });
});

export { registerUser, activateUser, loginUser };
