import styles from "@/styles/pages/Product.module.css";
import Image from "next/image";
import Special from "../../components/Special";
import axios from "axios";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
const Product = ({ product }) => {
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(1);
	const handleClick = () => {
		const { price } = product;
		dispatch(addProduct({ ...product, price, quantity }));
	};
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.left}>
						<div className={styles.imageWrapper}>
							<div className={styles.imageContainer}>
								<Image
									src={product.img}
									alt=""
									fill
									priority={true}
									style={{ borderRadius: "10px" }}
								/>
							</div>
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.details}>
							<div className={styles.info}>
								<h1>{product.name}</h1>
								<p>
									{product.desc}
									Nagreen was fifteen when he reportedly sold
									pork sandwiches at the 1885 Seymour Fair,
									made so customers could eat while walking.
									The Historical Society explains that Nagreen
									named the hamburger after the Hamburg steak
									with which local German immigrants were
									familiar
								</p>
								<h2>$ {product.price}</h2>
							</div>
							<div className={styles.amountContainer}>
								<input
									type="number"
									name="quantity"
									className={styles.quantity}
									min="1"
									defaultValue="1"
									onChange={(e) =>
										setQuantity(e.target.value)
									}
								/>
								<button onClick={handleClick}>ADD +</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Special />
		</>
	);
};
export default Product;

export const getServerSideProps = async ({ params }) => {
	const res = await axios.get(
		`http://localhost:3000/api/products/${params.id}`
	);
	return {
		props: {
			product: res.data,
		},
	};
};
