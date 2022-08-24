import React from "react";
import styles from "../../css/footer.module.css";
import logo from "../../images/logo-white.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import instagram from "../../images/icon-instagram.svg";
import youtube from "../../images/icon-youtube.svg";
import pinterest from "../../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <img className={styles.logo} src={logo} alt="" />
        <div className={styles.icon}>
          <img src={facebook} alt="icon" />
          <img src={twitter} alt="icon" />
          <img src={instagram} alt="icon" />
          <img src={youtube} alt="icon" />
          <img src={pinterest} alt="icon" />
        </div>
      </div>
      <ul className={styles.link}>
        <div className={styles.pages}>
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
        </div>
        <div className={styles.call}>
          <li>Careers</li>
          <li>Support</li>
          <li>Privacy Policy</li>
        </div>
      </ul>
      <div className={styles.email}>
        <button className="btn-grad">Request Invite</button>
        <span>&copy;Easybank. All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
