import React from "react";
import styles from "./home.module.scss";
import HomePageHeader from "../../components/homePageHeader";
import Button from "../../components/common/Button";
import Text from "../../components/common/Text";
import { useNavigate } from "react-router-dom";

type HomePageProps = {};

const HomePage = ({}: HomePageProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.homePageContainer}>
      <HomePageHeader />
      <div className={styles.buttonContainer}>
        <Button
          className={styles.learMoreButton}
          name="learn more"
          border="red"
          size="large"
          onClick={() => navigate('/about')}
        >
          <Text className={styles.buttonText} color="white">
            Learn More!
          </Text>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
