import LunchDiningIcon from "@mui/icons-material/LunchDining";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import styles from "@/styles/components/Footer.module.css";
import Link from "next/link";

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<h3 className={styles.heading}>Bk INFO</h3>
					<a className={styles.link}>About BK</a>
					<a className={styles.link}>Fresh Taste</a>
					<a className={styles.link}>Invester Relations</a>
				</div>
				<div className={styles.center}>
					<h3 className={styles.heading}>CONTACT</h3>
					<a className={styles.link}>Help & Support</a>
					<a className={styles.link}>Write To Us</a>
					<a className={styles.link}>Career</a>
					<a className={styles.link}>Customer Care</a>
					<a className={styles.link}>Supply Chain Queries</a>
					<a className={styles.link}>Franchising</a>
				</div>
				<div className={styles.right}>
					<h3 className={styles.heading}>BK CARE</h3>
					<a className={styles.link}>Nutrition Information</a>
					<a className={styles.link}>Creating Brighter Future</a>
					<a className={styles.link}>Trust & Taste</a>
					<a className={styles.link}>Covid-19 Safety</a>
				</div>
			</div>

			<div className={styles.bottom}>
				<div className={styles.bLeft}>
					<Link href="/admin" style={{ color: "white" }}>
						<LunchDiningIcon
							style={{
								cursor: "pointer",
								margin: "0 10px",
								fontSize: "40px",
							}}
						/>
					</Link>
				</div>
				<div className={styles.bCenter}>
					TM & © 2022 BURGER KING CORPORATION . All Rights Reserved.
				</div>
				<div className={styles.bRight}>
					<InstagramIcon
						style={{
							cursor: "pointer",
							margin: "0 10px",
							fontSize: "40px",
						}}
					/>
					<a href="https://www.linkedin.com/in/neeraj-rana-387a53259" style={{ color: "white" }}>
						<LinkedInIcon
							style={{
								cursor: "pointer",
								margin: "0 10px",
								fontSize: "40px",
							}}
						/>
					</a>
					<a
						href="https://github.com/web10crown"
						style={{ color: "white" }}
					>
						<GitHubIcon
							style={{
								cursor: "pointer",
								margin: "0 10px",
								fontSize: "40px",
							}}
						/>
					</a>
					<TwitterIcon
						style={{
							cursor: "pointer",
							margin: "0 10px",
							fontSize: "40px",
						}}
					/>
				</div>
			</div>
		</div>
	);
};
export default Footer;
