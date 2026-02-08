import React from "react";
import styles from "./work.module.scss";
import AnimatedText from "../../components/AnimatedText";
import WorkImageAndText from "../../components/WorkImageAndText";
import image from "../../../public/images/18138F33-0C46-494E-B3D5-CA0493CC4750_1_102_o.jpeg";

const MyWork = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerContainer}>
        <AnimatedText
          text="My Work"
          delayPerChar={0.09}
          size="extraLarge"
          color="gold"
        />
      </div>
      <div>
        <WorkImageAndText workImage={image} text="hello world" />
        <WorkImageAndText workImage={image} text="hello world" reverse />
      </div>
    </div>
  );
};

export default MyWork;
