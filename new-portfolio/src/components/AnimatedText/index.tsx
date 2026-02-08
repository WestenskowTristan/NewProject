import React from "react";
import styles from "./animated-text.module.scss";

type AnimatedTextProps = {
  text: string;
  className?: string;
  delayPerChar: number;
  color?: "white" | "gold";
  size?: "small" | "medium" | "large" | "extraLarge";
};

const AnimatedText = ({
  text,
  className,
  delayPerChar = 0.05,
  color,
  size,
}: AnimatedTextProps) => {
  return (
    <div
      className={`${styles.animatedTextContainer} ${
        className ? className : ""
      } `}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`${styles.animatedChar} ${color ? styles[color] : ""} ${
            size ? styles[size] : ""
          }`}
          style={{ animationDelay: `${index * delayPerChar}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
