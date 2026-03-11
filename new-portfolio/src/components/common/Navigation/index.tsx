import React from "react";
import styles from "./navigation.module.scss";
import { Outlet, useNavigate } from "react-router-dom";
import NavMenuItems from "../NavMenuItems";
import Button from "../Button";
import logo from '../../../../public/images/logo.webp'

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.navigationConatiner}>
      <div className={styles.navigationContentContainer}>
        <div className={styles.homeButtonContainer}>
          <Button name="home" variant="icon" onClick={() => navigate("/")}>
            <img className={styles.logoImage} src={logo} />
          </Button>
        </div>
        <div className={styles.navItemsContainer}>
          <NavMenuItems title="About Me" route="/about" />
          <NavMenuItems title="My Work" route="work" />
          <NavMenuItems title="Contact Me!" route="contact" />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
