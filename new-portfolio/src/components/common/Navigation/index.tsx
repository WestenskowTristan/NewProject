import React from "react";
import styles from "./navigation.module.scss";
import { Outlet } from "react-router-dom";
import NavMenuItems from "../NavMenuItems";

const Navigation = () => {
  return (
    <div className={styles.navigationConatiner}>
      <div className={styles.homeButtonContainer}>
        <div className={styles.div}>Hello world</div>
      </div>
      <div className={styles.navItemsContainer}>
        <NavMenuItems title="About Me" />
        <NavMenuItems title="My Work" />
        <NavMenuItems title="My Experiance" />
        <NavMenuItems title="Contact Me!" />
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
