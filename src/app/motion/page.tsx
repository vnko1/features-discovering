"use client";
import React from "react";
import styles from "./motion.module.scss";
import { motion } from "framer-motion";

function Page() {
  return (
    <motion.div
      className={styles.box}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.2 }}
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
    />
  );
}

export default Page;
