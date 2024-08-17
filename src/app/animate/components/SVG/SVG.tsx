import React from "react";
import styles from "./SVG.module.scss";
import Link from "next/link";

const SVG = () => {
  return (
    <Link className={styles.container} href={"/"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.icon}
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <rect
          className={styles.top}
          x="0"
          y="0"
          rx="4"
          ry="4"
          width="100%"
          height="8"
        />
        <rect
          className={styles.middle}
          x="0"
          y="20"
          rx="4"
          ry="4"
          width="100%"
          height="8"
        />
        <rect
          className={styles.bottom}
          x="0"
          y="40"
          rx="4"
          ry="4"
          width="100%"
          height="8"
        />
      </svg>
    </Link>
  );
};

export default SVG;
