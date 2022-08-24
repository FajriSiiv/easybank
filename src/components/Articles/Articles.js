import React from "react";
import styles from "../../css/artikel.module.css";
import { artc } from "../../data/dataMa";
const Articles = () => {
  let data = artc;
  return (
    <div className={styles.container}>
      <h2>Latest Articles</h2>
      <div className={styles.cards}>
        {data.map((e) => (
          <div className={styles.card} key={e.id}>
            <img src={e.icon} alt={e.title} />
            <div className={styles.text}>
              <span>By {e.creator}</span>
              <h3>{e.title}</h3>
              <p>{e.desc.substring(0, 120)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
