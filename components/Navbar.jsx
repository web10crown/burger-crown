import Image from "next/image";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonIcon from "@mui/icons-material/Person";
import styles from "@/styles/components/Navbar.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StoreIcon from "@mui/icons-material/Store";
import PercentIcon from "@mui/icons-material/Percent";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
const Navbar = () => {
	const cart = useSelector((state) => state.cart);
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<div className={styles.imageContainer}>
						<Link href="/">
							<Image
								src="/images/logo/logo.png"
								alt="logo"
								width="70"
								height="70"
							/>
						</Link>
					</div>
					<h4 className={styles.banner}>DINE-IN/TAKEAWAY</h4>
					<div className={styles.location}>
						<LocationOnIcon style={{ fontSize: "15px" }} />
						Tap to pick your Location
					</div>
				</div>
				<div className={styles.center}>
					<div className={styles.store}>
						<StoreIcon /> NEARBY STORES
					</div>
					<div className={styles.deals}>
						<PercentIcon
							style={{
								color: "white",
								backgroundColor: "gray",
								borderRadius: "50%",
								fontSize: "15px",
								padding: "3px",
							}}
						/>
						KING DEALS
					</div>
				</div>
				<div className={styles.right}>
					<Link
						href="/login"
						style={{ color: "gray", textDecoration: "none" }}
					>
						<div className={styles.login}>
							<PersonIcon style={{ fontSize: "30px" }} />
							LOGIN
						</div>
					</Link>
					<Link
						href="/cart"
						style={{ textDecoration: "none", color: "gray" }}
					>
						<div className={styles.cart}>
							<Badge
								badgeContent={cart.quantity}
								color="error"
								style={{ marginRight: "5px" }}
							>
								<LocalMallIcon
									style={{ fontSize: "30px", color: "gray" }}
								/>
							</Badge>
							CART
						</div>
					</Link>
					<SearchIcon
						style={{
							marginRight: "10px",
							cursor: "pointer",
							color: "#e70",
							fontSize: "30px",
						}}
					/>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
