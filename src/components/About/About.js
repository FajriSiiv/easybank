import React from "react";
import styles from "../../css/about.module.css";
import { aboutDef } from "../../data/dataMa";

const About = () => {
  let dataMap = aboutDef;
  return (
    <div className={styles.container}>
      <div className={styles.text1}>
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. <br />
          Control your finances likes never before
        </p>
      </div>
      <div className={styles.cards}>
        {dataMap.map((e) => (
          <div className={styles.card} key={e.id}>
            <img src={e.icon} alt="" />
            <h3>{e.title}</h3>
            <p>{e.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
