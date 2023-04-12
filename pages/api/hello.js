import dbConnect from "../../util/dbConnect";
export default async function handler(req, res) {
  await dbConnect();

  res.status(200).json({ name: "Neeraj Rana " });
}
