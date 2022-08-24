import React from "react";
import About from "../About/About";
import Main from "../Main/Main";
import styles from "../../css/hero.module.css";
import Articles from "../Articles/Articles";
const Hero = () => {
  return (
    <main className={styles.container}>
      <Main />
      <About />
      <Articles />
    </main>
  );
};

export default Hero;
