import styles from "@/styles/components/Slider.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const Slider = () => {
	const [slideIndex, setIndex] = useState(0);

	useEffect(() => {
		const indexInterval = setInterval(() => {
			setIndex(slideIndex < 4 ? slideIndex + 1 : 0);
		}, 5000);
		return () => clearInterval(indexInterval);
	}, [slideIndex]);

	return (
		<div className={styles.container}>
			<Link href="/products">
				<div
					className={styles.wrapper}
					style={{ transform: `translatex(${slideIndex * -100}vw)` }}
				>
					<div className={styles.slide}>
						<Image
							src="/images/slider0.jpg"
							alt="burger"
							fill
							priority={true}
							sizes="auto"
							style={{ objectFit: "cover" }}
						/>
					</div>
					<div className={styles.slide}>
						<Image
							src="/images/slider1.jpg"
							alt="burger"
							fill
							sizes="auto"
							style={{ objectFit: "cover" }}
						/>
					</div>
					<div className={styles.slide}>
						<Image
							src="/images/slider2.jpg"
							alt="burger"
							fill
							sizes="auto"
							style={{ objectFit: "cover" }}
						/>
					</div>
					<div className={styles.slide}>
						<Image
							src="/images/slider3.jpg"
							alt="burger"
							fill
							sizes="auto"
							style={{ objectFit: "cover" }}
						/>
					</div>
					<div className={styles.slide}>
						<Image
							src="/images/slider4.jpg"
							alt="burger"
							fill
							sizes="auto"
							style={{ objectFit: "cover" }}
						/>
					</div>
				</div>
			</Link>
		</div>
	);
};
export default Slider;
