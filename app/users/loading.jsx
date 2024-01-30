
import styles from './loading.module.css'
export default function Loading() {
   

	return (
		<div className={styles.loaderContainer}>
		 
			<div className={styles.loader}>
			  <div className={styles.circular}></div>
			  <p>Loading...</p>
			</div>
		</div>
	  );
}