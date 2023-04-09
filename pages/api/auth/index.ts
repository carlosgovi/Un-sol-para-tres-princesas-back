import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "lib/firebase";
import { Auth } from "models/auth";
import { User } from "models/user";
import { sendCode } from "controller/auth";
import { handlerCORS } from "lib/middelwares";

async function handlerAuth(req: NextApiRequest, res: NextApiResponse) {
  console.log("aqui el req.body", req.body);
  if ((req.body = typeof String)) {
    JSON.parse(req.body);
  }

  const result = await sendCode(req.body.email);
  return res.send(result);
}
export default handlerCORS(handlerAuth);
