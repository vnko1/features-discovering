import React from "react";
import styles from "./page.module.scss";

function Layout({
  children,
  tabs,
}: {
  children: React.ReactNode;
  tabs: React.ReactNode;
}) {
  return (
    <div className={styles.body}>
      <header>Header</header>
      <main className="flex flex-col items-center">
        {tabs}
        <div className={styles.main}> {children}</div>
      </main>
      <footer>FOOTER</footer>
    </div>
  );
}

export default Layout;
