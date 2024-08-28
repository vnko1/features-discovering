"use client";
import React from "react";
import styles from "./page.module.scss";

function Page() {
  return (
    <section className="h-screen p-10 ">
      <div className="w-full">
        <div
          className={styles.slider}
          // data-reverse
          style={{
            "--width": " 100px",
            "--height": "50px",
            "--qty": 10,
          }}
        >
          <ul className={styles.list}>
            <li className={styles.item} style={{ "--position": 1 }}>
              <button
                onClick={() => {
                  console.log("click");
                }}
              >
                ITEM
              </button>
            </li>
            <li className={styles.item} style={{ "--position": 2 }}>
              <button
                onClick={() => {
                  console.log("click");
                }}
              >
                ITEM
              </button>
            </li>
            <li className={styles.item} style={{ "--position": 3 }}>
              <button
                onClick={() => {
                  console.log("click");
                }}
              >
                ITEM
              </button>
            </li>
            <li className={styles.item} style={{ "--position": 4 }}>
              <button
                onClick={() => {
                  console.log("click");
                }}
              >
                ITEM
              </button>
            </li>
            <li className={styles.item} style={{ "--position": 5 }}>
              <button
                onClick={() => {
                  console.log("click");
                }}
              >
                ITEM
              </button>
            </li>
            <li className={styles.item} style={{ "--position": 6 }}>
              <button
                onClick={() => {
                  console.log("click");
                }}
              >
                ITEM
              </button>
            </li>
            <li className={styles.item} style={{ "--position": 7 }}>
              <button
                onClick={() => {
                  console.log("click");
                }}
              >
                ITEM
              </button>
            </li>
            <li className={styles.item} style={{ "--position": 8 }}>
              <button
                onClick={() => {
                  console.log("click");
                }}
              >
                ITEM
              </button>
            </li>
            <li className={styles.item} style={{ "--position": 9 }}>
              <button
                onClick={() => {
                  console.log("click");
                }}
              >
                ITEM
              </button>
            </li>
            <li className={styles.item} style={{ "--position": 10 }}>
              <button
                onClick={() => {
                  console.log("click");
                }}
              >
                ITEM
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Page;
