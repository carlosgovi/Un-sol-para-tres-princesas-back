import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "lib/firebase";
import { Auth } from "models/auth";
import { User } from "models/user";
import { sendCode } from "controller/auth";
export default async function (req: NextApiRequest, res: NextApiResponse) {
  console.log("aqui el req.body", req.body);

  const result = await sendCode(req.body.email);
  return res.send(result);
}
