import nc from "next-connect";
import { registerUser } from "../../../controllers/userController";

import dbConnect from "../../../lib/dbConnect";

import error from "../../../middlewares/errors";

const handler = nc({ error });

dbConnect();

handler.post(registerUser);

export default handler;
