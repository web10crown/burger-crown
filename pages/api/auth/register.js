import dbConnect from "../../../util/dbConnect";
import user from "../../../models/user";
import AES from "crypto-js/aes";

export default async function handler(req, res) {
  await dbConnect();
  const KEY = "password key";
  const { method } = req;

  if (method === "POST") {
    const password = AES.encrypt(req.body.pass, KEY).toString();

    const newUser = new user({
      name: req.body.name,
      phone: req.body.phone,
      pass: password,
    });

    try {
      const data = await newUser.save();

      res.status(200).json("register success");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
