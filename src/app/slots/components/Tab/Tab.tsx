"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import styles from "./Tab.module.scss";

const Tab = ({
  children,
  href,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${styles.link} ${pathname === href ? styles.selected : ""}`}
    >
      {children}
      {pathname === href ? (
        <motion.div className={styles.underline} layoutId="underline" />
      ) : null}
    </Link>
  );
};

export default Tab;
