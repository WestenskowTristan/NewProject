import React, { useRef } from "react";
import styles from "./work-image-and-text.module.scss";
import Text from "../common/Text";

type WorkImageAndTextProps = {
  workImage: string;
  header: string;
  subHeader: string;
  reverse?: boolean;
  link?: string;
};

const WorkImageAndText = ({
  workImage,
  header,
  subHeader,
  reverse,
  link,
}: WorkImageAndTextProps) => {
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    imageRef.current.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    imageRef.current.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <div
      className={`${
        reverse ? styles.workContainerReverse : styles.workContainer
      }`}
    >
      <div className={styles.textContainer}>
        <Text color="gold" weight="bold" className={styles.textHeader}>
          {header}
        </Text>
        <Text color="white">{subHeader}</Text>
      </div>

      <a href={link} target="_blank">
        <div
          className={styles.imageContainer}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img ref={imageRef} src={workImage} />
        </div>
      </a>
    </div>
  );
};

export default WorkImageAndText;
