import React from "react";
import mockUp from "../../images/image-mockups.png";
import introMock from "../../images/bg-intro-desktop.svg";
import styles from "../../css/main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your EasyBank account will be a
          one-stop- shop- for spending,saving, budgetin, investing, and much
          more
        </p>
        <button className="btn-grad">Request Invite</button>
      </div>
      <img className={styles.mockups} src={mockUp} alt="mockup" />
      <img className={styles.introMockup} src={introMock} alt="mockup" />
    </div>
  );
};

export default Main;
