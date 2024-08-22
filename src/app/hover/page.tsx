import React from "react";
import styles from "./page.module.scss";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

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
