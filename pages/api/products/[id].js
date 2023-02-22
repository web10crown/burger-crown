import dbconnect from "../../../util/mongo";
import Product from "../../../models/Product";
const handler = async (req, res) => {
	const {
		method,
		query: { id },
	} = req;
	await dbconnect();
	if (method === "GET") {
		try {
			const products = await Product.findById(id);
			res.status(200).json(products);
		} catch (err) {
			res.status(500).json(err);
		}
	}
};
export default handler;
