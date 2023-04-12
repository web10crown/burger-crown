import cookie from "cookie";

export default function handler(req, res) {
	const { method } = req;
	const { email, pass } = req.body;
	if (method === "POST") {
		if (email === process.env.EMAIL && pass === process.env.PASS) {
			res.setHeader(
				"Set-Cookie",
				cookie.serialize("token", process.env.TOKEN, {
					maxAge: 60 * 60,
					sameSite: "strict",
					path: "/",
				})
			);
			res.status(200).json("Login success");
		} else {
			res.status(400).json("wrong inputs");
		}
	}
}
