// import axios from "axios";
import React from "react";
import styles from "./page.module.scss";

const Page = () => {
  //   axios("http://localhost:1337/api/todos", {
  //     params: { pagination: { limit: 10, start: 20 } },
  //   });

  //   fetch(
  //     "http://localhost:1337/api/todos" +
  //       new URLSearchParams({
  //         "pagination[limit]": "10",
  //         "pagination[start]": "20",
  //       })
  //   );
  return (
    <div className={styles.wrapper}>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dolores
        placeat dignissimos natus quos voluptatibus, repudiandae repellendus quo
        neque? Exercitationem quibusdam tempore, repudiandae nostrum quam
        ducimus eos vel odit sit.
      </h1>
      <h2>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dolores
        placeat dignissimos natus quos voluptatibus, repudiandae repellendus quo
        neque? Exercitationem quibusdam tempore, repudiandae nostrum quam
        ducimus eos vel odit sit.
      </h2>
      <h3>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dolores
        placeat dignissimos natus quos voluptatibus, repudiandae repellendus quo
        neque? Exercitationem quibusdam tempore, repudiandae nostrum quam
        ducimus eos vel odit sit.
      </h3>
      <h4>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dolores
        placeat dignissimos natus quos voluptatibus, repudiandae repellendus quo
        neque? Exercitationem quibusdam tempore, repudiandae nostrum quam
        ducimus eos vel odit sit.
      </h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dolores
        placeat dignissimos natus quos voluptatibus, repudiandae repellendus quo
        neque? Exercitationem quibusdam tempore, repudiandae nostrum quam
        ducimus eos vel odit sit.
      </p>
    </div>
  );
};

export default Page;
