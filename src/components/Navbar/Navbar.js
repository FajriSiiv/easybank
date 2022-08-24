import React, { useState } from "react";
import logo from "../../images/logo.svg";
import styles from "../../css/nav.module.css";
import hamburger from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";

const Navbar = () => {
  const [Ham, setHam] = useState(false);

  const handleNav = () => {
    if (Ham === false) {
      setHam(true);
      console.log("true");
    } else {
      setHam(false);
      console.log("false");
    }
  };

  return (
    <nav>
      <div className={styles.logo}>
        <img src={logo} alt="easybank" />
      </div>
      <ul className={`${styles.ul} ${Ham ? styles.hamAni : null}`}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>
      <button className="btn-grad">Request Invite</button>
      <div onClick={handleNav} className={styles.ham}>
        <img src={Ham ? close : hamburger} alt="navbar" />
      </div>
    </nav>
  );
};

export default Navbar;
