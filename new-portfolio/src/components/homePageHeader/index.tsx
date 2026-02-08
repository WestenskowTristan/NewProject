import React from "react";
import styles from "./home-page.module.scss";
import Text from "../common/Text";
import AnimatedText from "../AnimatedText";

const HomePageHeader = () => {
  return (
    <div className={styles.homePageHeaderContainer}>
      <div className={styles.HeaderTextContainer}>
        <Text className={styles.headerText} color="white" weight="semiBold">
          Hello, my name is
        </Text>
        <Text className={styles.subHeaderName} color="gold">
          Tristan Westenskow
        </Text>
        <AnimatedText
          size="extraLarge"
          text="I Speak In Code."
          delayPerChar={0.08}
          color="gold"
          className={styles.animatedText}
        />
        <div className={styles.subHeaderSubTextContainer}>
          <Text className={styles.subHeaderSubText} color="white">
            I’m a software developer based in Salt Lake City, UT, specializing
            in frontend web development. I’ve helped build and launch websites
            ranging from platforms that connect clients with real estate agents
            to applications for cryptocurrency trading. I’m passionate about
            creating seamless user experiences while leveraging modern coding
            practices. Feel free to explore my work and get to know me!
          </Text>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeader;
