import React from "react";
import styles from "./work.module.scss";
import AnimatedText from "../../components/AnimatedText";
import WorkImageAndText from "../../components/WorkImageAndText";
import Button from "../../components/common/Button";
import Text from "../../components/common/Text";
import { useNavigate } from "react-router-dom";
import cryptodcaImage from "../../../public/images/CryptoDCA.webp";
import blueroofImage from "../../../public/images/Blueroof360.webp";
import goImage from "../../../public/images/Go.webp";
import homeImage from "../../../public/images/Home.webp";
import resume from "../../../public/images/Tristan_Westenskow_Resume.pdf";

const MyWork = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerContainer}>
        <AnimatedText
          text="Featured Projects"
          delayPerChar={0.09}
          size="extraLarge"
          color="gold"
          className={styles.animatedText}
        />
      </div>
      <div className={styles.workContentContainer}>
        <WorkImageAndText
          workImage={cryptodcaImage}
          header="CryptoDCA"
          subHeader="CryptoDCA is a responsive crypto dollar-cost-averaging platform. Contributed to architecture, API integration, UI development, and beta launch support."
          link="https://www.google.com"
        />
        <div className={styles.workSeperator} />
        <WorkImageAndText
          workImage={blueroofImage}
          header="Blueroof360"
          subHeader="A real-estate-focused software and digital marketing platform that provides tools and services for real estate brokers and agents to build their online presence and grow their business."
          reverse
          link="https://www.blueroof360.com/"
        />
        <div className={styles.workSeperator} />
        <WorkImageAndText
          workImage={goImage}
          header="Brivity GO"
          subHeader="Brivity GO is a mobile companion app for the Brivity real-estate CRM platform designed to help real estate agents and teams manage their business from anywhere."
          link="https://apps.apple.com/us/app/brivity-go/id1436855317"
        />
        <div className={styles.workSeperator} />
        <WorkImageAndText
          workImage={homeImage}
          header="Brivity Home"
          subHeader="Brivity Home is a consumer-facing mobile app from Brivity that’s designed to help home buyers (and sellers) search for properties and stay connected with their real estate agent throughout the home search process."
          reverse
          link="https://apps.apple.com/us/app/brivity-home/id1446481392"
        />
      </div>
      <div className={styles.seperatorDiv} />
      <div className={styles.resumeContainer}>
        <Text weight="bold" color="gold" className={styles.resumeText}>
          See my contributions to these products by checking out my resume
          below!
        </Text>
        <Button
          className={styles.resumeButton}
          name="learn more"
          border="red"
          size="large"
          onClick={() => window.open(resume, "_blank")}
        >
          <Text className={styles.buttonText} color="white">
            My Resume
          </Text>
        </Button>
      </div>
      <div className={styles.seperatorDiv} />
      <div className={styles.buttonContainer}>
        <Button
          className={styles.learnMoreButton}
          name="learn more"
          border="red"
          size="large"
          onClick={() => navigate("/contact")}
        >
          <Text className={styles.buttonText} color="white">
            Contact Me!
          </Text>
        </Button>
      </div>
    </div>
  );
};

export default MyWork;
