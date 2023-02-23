import styles from "@/styles/components/Loading.module.css";
import Image from "next/image";
const Loading = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.img}>
						<Image
							src="/images/loading.svg"
							alt="LOADING ..."
							fill
							priority={true}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
export default Loading;
