import styles from "@/styles/pages/Login.module.css";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
const Login = () => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const router = useRouter();

	const submitHandler = async (e) => {
		e.preventDefault();
		const data = {
			email,
			pass,
		};
		try {
			await axios.post("https://burger-crown.vercel.app/api/admin", data);
			router.push("/admin");
			alert("Login success");
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<h2
						style={{
							fontWeight: "100",
							color: "gray",
							marginBottom: "20px",
						}}
					>
						Login Here (only for Admin)
					</h2>
					<form onSubmit={submitHandler}>
						<input
							type="gmail"
							placeholder="Enter email"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Enter password"
							onChange={(e) => setPass(e.target.value)}
						/>
						<button className={styles.btn}>LOGIN</button>
					</form>
					<div>
						<Link href="/products">
							<button className={styles.btn}>
								Continue Shoping
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
