"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";

const Tab = ({ value }: { value: number }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 500);

    return () => {
      setIsActive(false);
    };
  }, []);

  return (
    <div className={`${styles.tab} ${isActive ? styles.active : ""}`}>
      Tab body {value}
    </div>
  );
};

const tabs = [
  { node: <Tab value={1} /> },
  { node: <Tab value={2} /> },
  { node: <Tab value={3} /> },
  { node: <Tab value={4} /> },
  { node: <Tab value={5} /> },
];

const ClientTabs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="w-full h-screen p-4">
      <div className="flex gap-3">
        {tabs.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`p-1 border border-red-100 bg-cyan-300 transition-all duration-150 ${
              currentIndex === i ? "bg-red-500" : ""
            }`}
          >
            Tab button {i + 1}
          </button>
        ))}
      </div>
      <div className="pt-4">{tabs[currentIndex].node}</div>
    </div>
  );
};

export default ClientTabs;
