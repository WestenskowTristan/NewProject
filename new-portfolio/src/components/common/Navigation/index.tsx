import React from "react";
import styles from "./navigation.module.scss";
import { Outlet, useNavigate } from "react-router-dom";
import NavMenuItems from "../NavMenuItems";
import Button from "../Button";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Icon from "../Icon";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.navigationConatiner}>
      <div className={styles.homeButtonContainer}>
        <Button name="home" variant="icon" onClick={() => navigate("/")}>
          <Icon color="white" icon={faGear} />
        </Button>
      </div>
      <div className={styles.navItemsContainer}>
        <NavMenuItems title="About Me" route="/about" />
        <NavMenuItems title="My Experiance" route="experiance" />
        <NavMenuItems title="My Work" route="work" />
        <NavMenuItems title="Contact Me!" route="contact" />
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
