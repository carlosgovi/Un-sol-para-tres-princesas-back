import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "lib/firebase";
import { Auth } from "models/auth";
import { User } from "models/user";
import { sendCode } from "controller/auth";
import { handlerCORS } from "lib/middelwares";

async function handlerAuth(req: NextApiRequest, res: NextApiResponse) {
  console.log("aqui el req.body", req.body);
  const { email } = req.body;
  console.log("del email", email);

  const result = await sendCode(email);
  return res.send(result);
}
export default handlerCORS(handlerAuth);
