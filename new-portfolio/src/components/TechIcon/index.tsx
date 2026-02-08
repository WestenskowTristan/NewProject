import React from "react";
import styles from "./tech-icon.module.scss";
import Text from "../common/Text";

type TechIconProps = {
  image: string;
  alt: string;
  description: string;
};

const TechIcon = ({ image, alt, description }: TechIconProps) => {
  return (
    <div className={styles.techIcon}>
      <img src={image} alt={alt} />
      <div className={styles.toolTip}>
        <Text>{description}</Text>
      </div>
    </div>
  );
};

export default TechIcon;
