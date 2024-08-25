import React from "react";
import styles from "./page.module.scss";
import { getRandomColor } from "@/utils";

function Page() {
  return (
    <section className="p-4 flex justify-center">
      {/* <div className={styles.container}>
        <div
          className={`${styles.item} ${styles.item1}`}
          style={{ backgroundColor: getRandomColor() }}
        >
          1
        </div>
        <div
          className={`${styles.item} ${styles.item2}`}
          style={{ backgroundColor: getRandomColor() }}
        >
          2
        </div>
        <div
          className={`${styles.item} ${styles.item3}`}
          style={{ backgroundColor: getRandomColor() }}
        >
          3
        </div>
      </div> */}
      {/* <div className={styles.container}>
        <div
          className={`${styles.item} ${styles.item1}`}
          style={{ backgroundColor: getRandomColor() }}
        >
          1
        </div>
        <div
          className={`${styles.item} ${styles.item2}`}
          style={{ backgroundColor: getRandomColor() }}
        >
          2
        </div>
        <div
          className={`${styles.item} ${styles.item3}`}
          style={{ backgroundColor: getRandomColor() }}
        >
          3
        </div>
        <div
          className={`${styles.item} ${styles.item1}`}
          style={{ backgroundColor: getRandomColor() }}
        >
          4
        </div>
        <div
          className={`${styles.item} ${styles.item2}`}
          style={{ backgroundColor: getRandomColor() }}
        >
          5
        </div>
        <div
          className={`${styles.item} ${styles.item3}`}
          style={{ backgroundColor: getRandomColor() }}
        >
          6
        </div>
        <div
          className={`${styles.item} ${styles.item3}`}
          style={{ backgroundColor: getRandomColor() }}
        >
          7
        </div>
        <div
          className={`${styles.item} ${styles.item3}`}
          style={{ backgroundColor: getRandomColor() }}
        >
          8
        </div>
      </div> */}
      <div className={styles.container}>
        <div
          className={styles.header}
          style={{ backgroundColor: getRandomColor() }}
        >
          HEADER
        </div>
        <div className={styles.yellow} style={{ backgroundColor: "yellow" }}>
          YELLOW
        </div>
        <div className={styles.purple} style={{ backgroundColor: "purple" }}>
          PURPLE
        </div>
        <div className={styles.red} style={{ backgroundColor: "red" }}>
          RED
        </div>
        <div
          className={styles.signUp}
          style={{ backgroundColor: getRandomColor() }}
        >
          SIGN UP
        </div>
        <div
          className={styles.content}
          style={{ backgroundColor: getRandomColor() }}
        >
          CONTENT
        </div>
      </div>
    </section>
  );
}

export default Page;
