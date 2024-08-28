"use client";
import React from "react";
import styles from "./page.module.scss";

const items = Array(15).fill("Partners name");

function Page() {
  return (
    <section className="h-screen p-10 ">
      <div className="w-full">
        <div
          className={styles.slider}
          // data-reverse
          style={{
            "--width": "100px",
            "--height": "50px",
            "--qty": items.length,
          }}
        >
          <ul className={styles.list}>
            {items.map((el, i) => (
              <li
                key={i}
                className={styles.item}
                style={{ "--position": i + 1 }}
              >
                <button
                  onClick={() => {
                    console.log("click");
                  }}
                >
                  {el}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Page;
