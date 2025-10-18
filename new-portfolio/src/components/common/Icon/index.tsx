import React from 'react';
import styles from './icon.module.scss';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

type IconProps = {
  className?: string;
  color?: "black" | "white" | "grey" | "blue" | "red" | "green" | "purple" | "inherit",
} & FontAwesomeIconProps;

/**
 * Component for interfacing with Font Awesome Icons
 * @param icon - The icon you want to show.
 * @param className - Include a custom class name to the icon element.  
 * @param dark - Change color to the dark theme.
 * @param light - Change color to light theme.
 * @param blue - Change color to the blue theme.
 * @param grey - Change color to the grey theme.
 * @param red - Change color to the red theme.
 * @param green - Change color to the green theme.
 * @param purple - Change color to the purple theme.
 * @param inherit - Change color to inherit its parents theme.
 */
const Icon = ({
  icon,
  className,
  color = "blue",
  ...rest
}: IconProps) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={`
        ${className ? className : ""}
        ${color ? styles[color] : ""}
      `}
      {...rest}
    />
  );
};

export default Icon;