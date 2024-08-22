"use client";
import { useEffect, useState } from "react";
import styles from "./Tab.module.scss";

const Tab = ({ value }: { value: number }) => {
  const [isActive, setIsActive] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (!isMounted) return setIsActive(true);
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 300);

    return () => {
      clearTimeout(timer);
      setIsActive(false); // Reset animation state on unmount
    };
  }, [value, isMounted]);

  return (
    <div
      className={`${styles.tab} ${isMounted ? styles.inactive : ""} ${
        isActive ? styles.active : ""
      }`}
    >
      Tab body {value}
    </div>
  );
};

export default Tab;
