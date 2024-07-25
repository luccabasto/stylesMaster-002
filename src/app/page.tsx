
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <div className={styles.frame}>
        <input type="checkbox" id="button"
          className={`${styles.hidden} ${styles.input}`} />
        <label htmlFor="button" className={styles.btn}>Concluir<img src="https://100dayscss.com/codepen/checkmark-green.svg" className={styles.img} /></label>
        <svg className={styles.circle}>
          <circle cx="30" cy="30" r="29" />
        </svg>
      </div>
    </main>
    <footer><p>&copy; 2024 Lucca Basto</p></footer>
    </>
  );
}
