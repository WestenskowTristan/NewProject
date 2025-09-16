import React from "react";
import styles from "./nav-menu-items.module.scss";

type NavMenuItemsProps = {
  title: string;
};

const NavMenuItems = ({ title }: NavMenuItemsProps) => {
  return (
    <div className={styles.navItemContainer}>
      <div className={styles.navItemTitle}>{title}</div>
    </div>
  );
};

export default NavMenuItems;
