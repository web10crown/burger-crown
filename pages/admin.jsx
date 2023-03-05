import styles from "@/styles/pages/Admin.module.css";
import { useState } from "react";
import axios from "axios";
const Admin = () => {
	const [name, setName] = useState("");
	const [desc, setDesc] = useState("");
	const [price, setPrice] = useState(1);
	const [file, setFile] = useState("");

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
				desc,
				price,
				img: cloudRes.data.url,
			};
			const res = await axios.post(
				"https://burger-crown.vercel.app/api/products",
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
					<h2>Enter Product Details </h2>
					<form onSubmit={submitHandler}>
						<input
							type="text"
							placeholder="Enter Name"
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							type="text"
							placeholder="Enter desc"
							onChange={(e) => setDesc(e.target.value)}
						/>
						<input
							type="number"
							placeholder="Enter price "
							onChange={(e) => setPrice(e.target.value)}
						/>
						<input
							type="file"
							onChange={(e) => setFile(e.target.files[0])}
						/>
						<button className={styles.btn}>SUBMIT</button>
					</form>
				</div>
			</div>
		</>
	);
};
export const getServerSideProps = async (ctx) => {
	const myCookie = ctx.req?.cookies || "";

	if (myCookie.token !== process.env.TOKEN) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}
	return {
		props: {
			admin: "Admin",
		},
	};
};
export default Admin;
