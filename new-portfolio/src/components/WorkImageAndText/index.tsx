import React from "react";
import styles from "./work-image-and-text.module.scss";
import Text from "../common/Text";

type WorkImageAndTextProps = {
  workImage: string;
  text: string;
  reverse?: boolean;
};

const WorkImageAndText = ({
  workImage,
  text,
  reverse,
}: WorkImageAndTextProps) => {
  return (
    <div
      className={`${
        reverse ? styles.workContainerReverse : styles.workContainer
      }`}
    >
      <div className={styles.textContainer}>
        <Text color="gold">{text}</Text>
      </div>
      <div className={styles.imageContainer}>
        <img src={workImage} />
      </div>
    </div>
  );
};

export default WorkImageAndText;
