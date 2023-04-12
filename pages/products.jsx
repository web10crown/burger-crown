import styles from "@/styles/pages/Products.module.css";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { publicRequest } from "../request";

export default function Products({ data }) {
	return (
		<div className={styles.container}>
			<h1>{data[0] ? "PRODUCTS " : "Not Availiable"}</h1>
			<div className={styles.wrapper}>
				<div className={styles.filters}>
					<h2>Average Customer Review</h2>
					<p>filter 1</p>
				</div>
				<div className={styles.cardContainer}>
					{data
						.slice()
						.reverse()
						.map((p) => (
							<div className={styles.card} key={p._id}>
								<Link
									href={`/product/${p._id}`}
									style={{
										color: "#131921",
										textDecoration: "none",
									}}
								>
									<>
										<div className={styles.imgContainer}>
											<Image
												src={p.img}
												alt={p.name}
												fill
												style={{ objectFit: "contain" }}
												sizes="auto"
												priority={true}
											/>
										</div>

										<div className={styles.info}>
											<button>{p.name}</button>
											<h4>{p.price} ₹</h4>
											<p>{p.desc.slice(0, 70)}...</p>
										</div>
									</>
								</Link>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}

export const getServerSideProps = async (params) => {
	const cat = params.query.cat;
	const find = params.query.find;

	try {
		if (cat) {
			const res = await axios.get(
				`${publicRequest}/api/products?cat=${cat}`
			);
			return {
				props: { data: res.data },
			};
		} else if (find) {
			const res = await axios.get(
				`${publicRequest}/api/products?find=${find}`
			);
			return {
				props: { data: res.data },
			};
		} else {
			const res = await axios.get(`${publicRequest}/api/products`);
			return {
				props: { data: res.data },
			};
		}
	} catch (err) {
		console.log(err);
		return {
			props: { data: [] },
		};
	}
};
