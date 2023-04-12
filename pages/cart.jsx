import styles from "@/styles/pages/Cart.module.css";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "@/redux/cartSlice";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);
const Cart = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const removeProduct = (_id) => {
		dispatch(remove({ _id }));
	};

	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.left}>
						<h2>Shoping Cart</h2>
						{cart.products
							.slice()
							.reverse()
							.map((p) => (
								<div className={styles.product}>
									<div className={styles.imgContainer}>
										<div className={styles.img}>
											<Image
												src={p.img}
												alt="product"
												fill
												sizes="auto"
												priority={true}
											/>
										</div>
									</div>
									<div className={styles.details}>
										<h3>{p.desc.slice(0, 110)}...</h3>
										<p style={{ color: "green" }}>
											In Stock
										</p>
										<p>Eligible for FREE Shipping</p>
										<p>
											<b>Price :</b>₹ {p.price}
										</p>
										<div className={styles.amount}>
											<h5>QTY</h5>
											<input
												type="number"
												min="1"
												defaultValue={p.quantity}
											/>
											<button
												onClick={() =>
													removeProduct(p._id)
												}
											>
												Delete
											</button>
											<button>Save</button>
											<button>See more</button>
											<button>Share</button>
										</div>
									</div>
									<div className={styles.amountContainer}>
										<h3>₹ {p.price * p.quantity}</h3>
									</div>
								</div>
							))}
					</div>
					<div className={styles.right}>
						<div className={styles.paymentContainer}>
							<h3>
								Subtotal ({cart.quantity} item) : ₹{cart.amount}
							</h3>
							<p>This order contains a gift</p>

							<form
								style={{
									display: "flex",
									flexDirection: "column",
								}}
								action={`/api/checkoutSession?total=${
									cart.amount * 100
								}`}
								method="POST"
							>
								<button type="submit" role="link">
									Proceed to Buy
								</button>
							</form>
							<h4>EMI Available</h4>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Cart;
