import React from "react";
import styles from "./page.module.scss";

const Page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>My Course</h1>
        <h2>HTML Tutorial</h2>
        <h2>CSS Tutorial</h2>
        <h2>JavaScript Tutorial</h2>
        <h2>React Tutorial</h2>
        <h2>Next.js Tutorial</h2>
      </div>
    </div>
  );
};

export default Page;
