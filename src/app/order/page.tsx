import React from "react";
import styles from "./page.module.scss";

const Page = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={`${styles.box} ${styles.red}`}></div>
        <div className={`${styles.box} ${styles.blue}`}></div>
        <div className={`${styles.box} ${styles.green}`}></div>
        <div className={`${styles.box} ${styles.orange}`}></div>
      </div>
    </div>
  );
};

export default Page;
