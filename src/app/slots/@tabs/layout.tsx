import React from "react";
import Tab from "../components";

import styles from "./tabs.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.window}>
      <nav className={styles.nav}>
        <Tab href={"/slots"}>First</Tab>
        <Tab href={"/slots/sec"}>Second</Tab>
        <Tab href={"/slots/third"}>Third</Tab>
      </nav>
      <div className="mb-10 text-center">{children}</div>
    </div>
  );
}
