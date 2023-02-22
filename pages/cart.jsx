import styles from "@/styles/pages/Cart.module.css";
import Link from "next/link";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../redux/cartSlice";

const Cart = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const handleDelete = (id) => {
		dispatch(removeProduct({ id }));
	};
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.top}>
						<Link href="/products">
							<button className={styles.continue}>
								CONTINUE SHOPING
							</button>
						</Link>
						<button className={styles.checkout}>CHECKOUT</button>
					</div>
					<div className={styles.bottom}>
						<div className={styles.bLeft}>
							{cart.products.map((p) => (
								<div className={styles.product} key={p._id}>
									<div className={styles.left}>
										<div className={styles.imageContainer}>
											<Image
												src={p.img}
												alt="burger"
												fill
												style={{
													borderRadius: "5px",
												}}
											/>
										</div>
									</div>

									<div className={styles.center}>
										<div className={styles.details}>
											<h3>{p.name.slice(0, 20)}...</h3>
											<p>{p.desc.slice(0, 50)}...</p>
										</div>
									</div>
									<div className={styles.right}>
										<div className={styles.amountContainer}>
											<h4>PRICE : $ {p.price}</h4>
											<h5>QUANTITY : {p.quantity}</h5>
											<div>
												<DeleteIcon
													style={{
														color: "red",
														width: "100%",
														margin: "auto",
														cursor: "pointer",
													}}
													id={p._id}
													onClick={(e) =>
														handleDelete(p._id)
													}
												/>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className={styles.bRight}>
							<h2>PAYMENT DETAILS</h2>
							<div className={styles.priceDetails}>
								<h4>Total Price : $ {cart.amount}</h4>
								<h4>Delivery Charges : $ 1</h4>
								<h4>Delivery Discount : $ 1 </h4>
								<h4 style={{ color: "#636363" }}>
									Total Payable : $ {cart.amount}
								</h4>
							</div>
							<button className={styles.checkout}>
								CHECKOUT
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Cart;
