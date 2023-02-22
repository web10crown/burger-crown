import styles from "@/styles/components/Special.module.css";
import Image from "next/image";
import Link from "next/link";

const Special = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.heading}>BK SPECIALS</h2>
			<div className={styles.wrapper}>
				<div className={styles.card}>
					<div className={styles.left}>
						<Image
							src="/images/products/p1.jpeg"
							alt="burger"
							fill
							sizes="auto"
							style={{ borderRadius: "6px 0 0 6px" }}
						/>
					</div>
					<div className={styles.right}>
						<div className={styles.cardSummary}>
							<h2 style={{ fontWeight: "100" }}>BK CLASIC VEG</h2>
							<p>
								Our tribute to clasic American taste.Bk veg...{" "}
							</p>
						</div>
						<Link
							href="/products"
							style={{ textDecoration: "none" }}
						>
							<div className={styles.price}>
								<p>$ 20</p>
								<a>ADD +</a>
							</div>
						</Link>
					</div>
				</div>

				<div className={styles.card}>
					<div className={styles.left}>
						<Image
							src="/images/products/p2.jpeg"
							alt="burger"
							fill
							sizes="auto"
							style={{ borderRadius: "6px 0 0 6px" }}
						/>
					</div>
					<div className={styles.right}>
						<div className={styles.cardSummary}>
							<h2 style={{ fontWeight: "100" }}>FRIES(KING)</h2>
							<p>
								Our tribute to clasic American taste.Bk veg...{" "}
							</p>
						</div>
						<Link
							href="/products"
							style={{ textDecoration: "none" }}
						>
							<div className={styles.price}>
								<p>$ 15</p>
								<a>ADD +</a>
							</div>
						</Link>
					</div>
				</div>

				<div className={styles.card}>
					<div className={styles.left}>
						<Image
							src="/images/products/p3.jpeg"
							alt="burger"
							fill
							sizes="auto"
							style={{ borderRadius: "6px 0 0 6px" }}
						/>
					</div>
					<div className={styles.right}>
						<div className={styles.cardSummary}>
							<h2 style={{ fontWeight: "100" }}>
								BK CLASIC CHICKEN
							</h2>
							<p>
								Our tribute to clasic American taste.Bk veg...
							</p>
						</div>
						<Link
							href="/products"
							style={{ textDecoration: "none" }}
						>
							<div className={styles.price}>
								<p>$ 100</p>
								<a>ADD +</a>
							</div>
						</Link>
					</div>
				</div>

				<div className={styles.card}>
					<div className={styles.left}>
						<Image
							src="/images/products/p4.jpeg"
							alt="burger"
							fill
							sizes="auto"
							style={{ borderRadius: "6px 0 0 6px" }}
						/>
					</div>
					<div className={styles.right}>
						<div className={styles.cardSummary}>
							<h2 style={{ fontWeight: "100" }}>
								CHICKEN BURGER
							</h2>
							<p>
								Our tribute to clasic American taste.Bk veg...
							</p>
						</div>
						<Link
							href="/products"
							style={{ textDecoration: "none" }}
						>
							<div className={styles.price}>
								<p>$ 110</p>
								<a>ADD +</a>
							</div>
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.explore}>
				<Link href="/products" style={{ textDecoration: "none" }}>
					<h2 className={styles.button}>EXPLORE FULL MENU</h2>
				</Link>
			</div>
			<div className={styles.bkwall}>
				<Link href="/products">
					<div className={styles.imageContainer}>
						<Image
							src="/images/products/bkwall.jpg"
							alt="BKwall"
							fill
							loading="lazy"
							sizes="auto"
							style={{ borderRadius: "10px" }}
						/>
					</div>
				</Link>
			</div>
		</div>
	);
};
export default Special;
