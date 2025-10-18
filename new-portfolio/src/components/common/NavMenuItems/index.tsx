import React from "react";
import styles from "./nav-menu-items.module.scss";
import Text from "../Text";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

type NavMenuItemsProps = {
  title: string;
  route: string;
};

const NavMenuItems = ({ title, route }: NavMenuItemsProps) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(route);
  };

  const isActive = location.pathname.includes(route);

  return (
    <Button
      onClick={handleNavigation}
      name="text"
      className={`${styles.navItemButton} ${isActive ? styles.active : ""}`}
      border="red"
    >
      <Text className={styles.textStyles} weight="semiBold" color="white">
        {title}
      </Text>
    </Button>
  );
};

export default NavMenuItems;
