import styles from "@/styles/pages/Register.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { publicRequest } from "../request";
import axios from "axios";
import { useRouter } from "next/router";

const Register = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [pass, setPass] = useState("");
	const router = useRouter();

	const submitHandler = async (e) => {
		e.preventDefault();
		const data = {
			name,
			phone,
			pass,
		};

		try {
			const res = await axios.post(
				`${publicRequest}/api/auth/register/`,
				data
			);
			console.log(res.data);
			alert("registered successfully login here ");
			router.push("/login");
		} catch (err) {
			console.log(err);
			alert("please use diffrent number or login");
		}
	};
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.top}>
						<div className={styles.logoContainer}>
							<div className={styles.logo}>
								<Image
									src="/logo/black.png"
									alt="Amazon.In"
									fill
									sizes="auto"
									priority={true}
								/>
							</div>
						</div>
					</div>
					<div className={styles.center}>
						<form onSubmit={submitHandler}>
							<h2>Create Account</h2>
							<b>Your name</b>
							<input
								type="text"
								placeholder="Ener your name"
								required
								onChange={(e) => setName(e.target.value)}
							/>
							<b>Mobile number</b>
							<div className={styles.mobile}>
								<select name="IN +91">
									<option value="India"> +91 India</option>
									<option value="Canada"> +1 canada</option>
								</select>
								<input
									type="text"
									placeholder="Mobile number"
									pattern="[0-9]{10}"
									required
									onChange={(e) => setPhone(e.target.value)}
								/>
							</div>
							<b>Password</b>
							<input
								type="password"
								placeholder="At least 6 characters"
								minLength="6"
								required
								onChange={(e) => setPass(e.target.value)}
							/>
							<span>
								! Passwords must be at least 6 characters.
							</span>
							<p>
								By enrolling your mobile phone number, you
								consent to receive automated security
								notifications via text message from Amazon.
								Message and data rates may apply.
							</p>
							<button>Continue</button>
							<div className={styles.terms}>
								<p>
									Already have an account?
									<Link
										href="/login"
										style={{ textDecoration: "none" }}
									>
										{" "}
										signIn
									</Link>
								</p>
								<p>
									By creating an account or logging in, you
									agree to Amazon’s Conditions of Use and
									Privacy Policy.
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
