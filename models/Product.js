import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		desc: { type: String, required: true },
		img: { type: String, required: true },
		price: { type: Number, required: true },
	},
	{ collection: "products", timeStamps: true }
);
export default mongoose.models.products ||
	mongoose.model("products", ProductSchema);
