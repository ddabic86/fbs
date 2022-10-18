import nc from "next-connect";
import { activateUser } from "../../../controllers/userController";

import dbConnect from "../../../lib/dbConnect";
import { authUser } from "../../../middlewares/auth";

import error from "../../../middlewares/errors";

const handler = nc({ error });

dbConnect();

handler.use(authUser).post(activateUser);

export default handler;
