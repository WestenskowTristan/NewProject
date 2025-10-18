import React from "react";
import styles from "./about-me.module.scss";
import AnimatedText from "../../components/AnimatedText";

const AboutMe = () => {
  return (
    <div>
      <AnimatedText
        text="A Little Bit About Me"
        delayPerChar={0.05}
        size="extraLarge"
        color="gold"
      />
    </div>
  );
};

export default AboutMe;
