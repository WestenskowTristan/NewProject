import React from "react";
import styles from './home.module.scss'

type HomePageProps = {};

const HomePage = ({}: HomePageProps) => {
  return <div className={styles.hello}>hello world</div>;
};

export default HomePage;
