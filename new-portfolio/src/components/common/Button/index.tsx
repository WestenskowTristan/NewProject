import { ReactNode } from "react";
import styles from "./button.module.scss";
import { Link } from "react-router-dom";

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  id?: string;
  variant?: "black" | "dark" | "icon" | "clear";
  size?: "large" | "medium" | "mid-medium" | "modal" | "small";
  href?: string;
  fullWidth?: boolean;
  targetBlank?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  name: string; //Required for accessibility
  border?: "gold" | "red";
};

const Button = ({
  children,
  className,
  variant = "clear",
  size = "mid-medium",
  href,
  fullWidth,
  targetBlank,
  onClick,
  disabled,
  name,
  border,
}: ButtonProps) => {
  const btnClass = `
    ${styles.buttonBase}
    ${fullWidth ? styles.fullWidth : ""}
    ${disabled ? styles.disabled : ""}
    ${className ? className : ""} 
    ${variant ? styles[variant] : ""}
    ${size ? styles[size] : ""}
    ${border ? styles[border]: ""}
  `;

  if (href) {
    return (
      <Link
        to={href}
        onClick={(e) => {
          e.stopPropagation();
          if (!!onClick) onClick();
        }}
        target={targetBlank ? "_blank" : ""}
        className={btnClass}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled}
      onClick={(e) => {
        e.stopPropagation();
        if (!!onClick) onClick();
      }}
      className={btnClass}
      name={name}
    >
      {children}
    </button>
  );
};

export default Button;
