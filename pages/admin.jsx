import styles from "@/styles/pages/Admin.module.css";
import { useState } from "react";
import axios from "axios";
import { publicRequest } from "../request";
const Admin = () => {
	const [name, setName] = useState("");
	const [brand, setBrand] = useState("");
	const [desc, setDesc] = useState("");
	const [price, setPrice] = useState(1);
	const [file, setFile] = useState("");
	const [cat, setCat] = useState("");

	const submitHandler = async (e) => {
		e.preventDefault();
		const data = new FormData();
		data.append("file", file);
		data.append("upload_preset", "uploads");
		try {
			const cloudRes = await axios.post(
				"https://api.cloudinary.com/v1_1/dpxa7serz/image/upload",
				data
			);
			const product = {
				name,
				brand,
				desc,
				cat,
				price,
				img: cloudRes.data.url,
			};
			const res = await axios.post(
				`${publicRequest}/api/products`,
				product
			);
			alert("data aded successfully");
			console.log(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<form onSubmit={submitHandler}>
						<h2>Enter Details </h2>
						<input
							type="text"
							placeholder="Enter name"
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							type="text"
							placeholder="Enter brand"
							onChange={(e) => setBrand(e.target.value)}
						/>
						<input
							type="text"
							placeholder="Enter description "
							onChange={(e) => setDesc(e.target.value)}
						/>
						<input
							type="text"
							placeholder="Enter category"
							onChange={(e) => setCat(e.target.value)}
						/>
						<input
							type="number"
							min="1"
							placeholder="Enter price"
							onChange={(e) => setPrice(e.target.value)}
						/>
						<input
							type="file"
							onChange={(e) => setFile(e.target.files[0])}
						/>
						<button>SUBMIT</button>
					</form>
				</div>
			</div>
		</>
	);
};
export default Admin;
