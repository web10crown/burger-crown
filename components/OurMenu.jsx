import styles from "@/styles/components/OurMenu.module.css";
import Image from "next/image";
import { menuData } from "../data/menuData";
import Link from "next/link";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const OurMenu = () => {
	const handleClick = (d) => {
		if (d === "r") {
			document.getElementById("wrapper").scrollLeft += 800;
		} else {
			document.getElementById("wrapper").scrollLeft -= 800;
		}
	};
	return (
		<div className={styles.main}>
			<h2 className={styles.heading}>OUR MENU</h2>

			<div className={styles.container}>
				<div
					className={styles.arrow}
					style={{ left: "-50px", borderRadius: "10px 0 0 10px " }}
					onClick={() => handleClick("l")}
				>
					<KeyboardArrowLeftIcon />
				</div>
				<div className={styles.wrapper} id="wrapper">
					{menuData.map((m, i) => (
						<div className={styles.menuCard} key={i}>
							<Link href="/products">
								<div className={styles.menuItem}>
									<Image
										src={`/images/ourMenu/${m.img}`}
										alt="menu"
										fill
										sizes="auto"
									/>
								</div>
							</Link>
							<h4
								style={{
									textAlign: "center",
									fontWeight: "200",
								}}
							>
								{m.desc}
							</h4>
						</div>
					))}
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
export default OurMenu;
