import nc from "next-connect";
import { loginUser } from "../../../controllers/userController";

import dbConnect from "../../../lib/dbConnect";
import { authUser } from "../../../middlewares/auth";

import error from "../../../middlewares/errors";

const handler = nc({ error });

dbConnect();

handler.post(loginUser);

export default handler;
