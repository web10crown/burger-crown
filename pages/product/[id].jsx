import styles from "@/styles/pages/product.module.css";
import { publicRequest } from "../../request";
import Image from "next/image";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "@/redux/cartSlice";
import { useState } from "react";

const Product = ({ product }) => {
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(1);

	const addProduct = () => {
		const { price, _id } = product;
		dispatch(add({ ...product, price, quantity, _id }));
	};
	return (
		<>
			<div className={styles.container}>
				<h5>{product.cat.toUpperCase() + " >"}</h5>
				<div className={styles.wrapper}>
					<div className={styles.left}>
						<div className={styles.imgContainer}>
							<div className={styles.img}>
								<Image
									src={`${product.img}`}
									alt="image"
									fill
									style={{ objectFit: "contain" }}
									sizes="auto"
									priority={true}
								/>
							</div>
						</div>
					</div>
					<div className={styles.center}>
						<div className={styles.heading}>
							<h2>{product.desc}</h2>
						</div>
						<hr />
						<div className={styles.price}>
							<p style={{ color: "red" }}>Deal of the Day</p>
							<div className={styles.amount}>
								<h4>-26%</h4>
								<h3>₹ {product.price}</h3>
							</div>
							<p>Inclusive of all taxes</p>
							<p>
								<b>EMI</b> starts at ₹
								{Math.round(product.price / 6)} No Cost EMI
								available
							</p>
						</div>
						<hr />
						<div className={styles.details}>
							<div className={styles.dHead}>
								<p>Brand</p>
								<p>Name</p>
								<p>Cat</p>
								<p>Price</p>
								<p>Details</p>
							</div>
							<div className={styles.dDetails}>
								<p>{product.brand}</p>
								<p>{product.name}</p>
								<p>{product.cat}</p>
								<p>{product.price}</p>
								<p>{product.desc.slice(0, 50)}...</p>
							</div>
						</div>
						<div className={styles.amountContainer}>
							<input
								type="number"
								min="1"
								defaultValue="1"
								onChange={(e) => setQuantity(e.target.value)}
							/>
							<button onClick={addProduct}>Add +</button>
						</div>
					</div>
					<div className={styles.right}>
						<h4>No offers available</h4>
					</div>
				</div>
			</div>
		</>
	);
};
export default Product;

export const getServerSideProps = async ({ params }) => {
	try {
		const res = await axios.get(
			`${publicRequest}/api/products/${params.id}`
		);
		return {
			props: {
				product: res.data,
			},
		};
	} catch (err) {
		console.log(err);
	}
};
