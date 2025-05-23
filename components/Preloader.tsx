// components/Preloader.jsx
import { useEffect } from "react";
import styles from "./Preloader.module.css";

const Preloader = () => {
  useEffect(() => {
    const preloader = document.querySelector("#preloader");

    // Tambah loaded class lebih awal
    setTimeout(() => {
      preloader?.classList.add(styles.loaded);
    }, 500); // Kurangkan ke 500ms

    // Kurangkan masa remove
    setTimeout(() => {
      preloader?.remove();
    }, 2000); // Set ke 2000ms untuk total 2 saat
  }, []);

  return (
    <div id="preloader" className={styles.preloader}>
      <div className={styles.line}></div>
    </div>
  );
};

export default Preloader;
