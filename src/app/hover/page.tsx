import React from "react";
import styles from "./page.module.scss";
import { getRandomColor } from "@/utils";

const Page = () => {
  return (
    <main>
      <div className={styles.list}>
        <div
          className={styles.item}
          style={{ backgroundColor: getRandomColor() }}
        ></div>
        <div
          className={styles.item}
          style={{ backgroundColor: getRandomColor() }}
        ></div>
        <div
          className={styles.item}
          style={{ backgroundColor: getRandomColor() }}
        ></div>
        <div
          className={styles.item}
          style={{ backgroundColor: getRandomColor() }}
        ></div>
        <div
          className={styles.item}
          style={{ backgroundColor: getRandomColor() }}
        ></div>
        <div
          className={styles.item}
          style={{ backgroundColor: getRandomColor() }}
        ></div>
        <div
          className={styles.item}
          style={{ backgroundColor: getRandomColor() }}
        ></div>
        <div
          className={styles.item}
          style={{ backgroundColor: getRandomColor() }}
        ></div>
        <div
          className={styles.item}
          style={{ backgroundColor: getRandomColor() }}
        ></div>
        <div
          className={styles.item}
          style={{ backgroundColor: getRandomColor() }}
        ></div>
      </div>
    </main>
  );
};

export default Page;
