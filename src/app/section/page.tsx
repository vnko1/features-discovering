import React from "react";
import styles from "./page.module.scss";

function page() {
  return (
    <main>
      <div className={styles.container}>
        <section className={styles.section}>Section 1</section>
        <section className={styles.section}>Section 2</section>
        <section className={styles.section}>Section 3</section>
        <section className={styles.section}>Section 4</section>
        <section className={styles.section}>Section 5</section>
      </div>
    </main>
  );
}

export default page;
