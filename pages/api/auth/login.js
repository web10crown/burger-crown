import dbConnect from "../../../util/dbConnect";
import user from "../../../models/user";
import AES from "crypto-js/aes";
import { enc } from "crypto-js";

export default async function handler(req, res) {
  await dbConnect();
  const KEY = "password key";

  const { method } = req;

  if (method === "POST") {
    const foundUser = await user.findOne({ phone: req.body.phone });
    const password = AES.decrypt(foundUser.pass, KEY).toString(enc.Utf8);
    console.log(password);
    if (req.body.pass === password) {
      res.status(200).json(foundUser);
    } else {
      res.status(401).json("password not matched");
    }
  }
}
