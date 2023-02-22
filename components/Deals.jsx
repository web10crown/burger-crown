import styles from "@/styles/components/Deal.module.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Image from "next/image";
import Link from "next/link";

const Deals = () => {
	const handleClick = (d) => {
		if (d === "r") {
			document.getElementById("cardContainer").scrollLeft += 800;
		} else {
			document.getElementById("cardContainer").scrollLeft -= 800;
		}
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.heading}>KING DEALS OF THE DAY</h2>
			<div className={styles.wrapper}>
				<div
					className={styles.arrow}
					style={{ left: "-50px", borderRadius: "10px 0 0 10px " }}
					onClick={() => handleClick("l")}
				>
					<KeyboardArrowLeftIcon />
				</div>
				<div className={styles.scrollbar} id="cardContainer">
					<div className={styles.cardContainer}>
						<Link href="/products">
							<div className={styles.card}>
								<Image
									src="/images/deals/deal1.jpg"
									alt=""
									fill
									sizes="auto"
								/>
							</div>
						</Link>
						<Link href="/products">
							<div className={styles.card}>
								<Image
									src="/images/deals/deal2.jpg"
									alt=""
									fill
									sizes="auto"
								/>
							</div>
						</Link>
						<Link href="/products">
							<div className={styles.card}>
								<Image
									src="/images/deals/deal3.jpg"
									alt=""
									fill
									sizes="auto"
								/>
							</div>
						</Link>
						<Link href="/products">
							<div className={styles.card}>
								<Image
									src="/images/deals/deal4.jpg"
									alt=""
									fill
									sizes="auto"
								/>
							</div>
						</Link>
					</div>
				</div>
				<div
					className={styles.arrow}
					style={{ right: "-50px", borderRadius: "0 10px 10px 0 " }}
					onClick={() => handleClick("r")}
				>
					<KeyboardArrowRightIcon />
				</div>
			</div>
		</div>
	);
};
export default Deals;
