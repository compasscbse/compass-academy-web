import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Hi, This is compass academy
        <br/>
        We are currently under development
      </main>
    </div>
  );
}
