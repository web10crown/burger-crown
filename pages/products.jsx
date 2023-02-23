import styles from "@/styles/pages/Products.module.css";
import OurMenu from "../components/OurMenu";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
const Products = ({ products }) => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.top}>
						<OurMenu />
					</div>
					<div className={styles.bottom}>
						<div className={styles.cardContainer}>
							{products.map((p) => (
								<div className={styles.card} key={p._id}>
									<div className={styles.imageContainer}>
										<Image
											src={`${p.img}`}
											alt=""
											fill
											sizes="auto"
											priority={true}
											style={{
												borderRadius: "5px 5px 0 0",
											}}
										/>
									</div>
									<div className={styles.details}>
										<h2>{p.name}</h2>
										<p>{p.desc.slice(0, 50)}...</p>
										<div className={styles.amountContainer}>
											<h3>$ {p.price}</h3>
											<Link
												href={`/product/${p._id}`}
												style={{
													textDecoration: "none",
													color: "orange",
												}}
											>
												<h4 className={styles.button}>
													ADD +
												</h4>
											</Link>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Products;

export const getServerSideProps = async () => {
	try {
		const res = await axios.get(`${process.env.URL}/api/products/`);
		return {
			props: {
				products: res.data,
			},
		};
	} catch (err) {
		console.log(err);
	}
};
