import React, { ReactNode } from "react";
import styles from "./page-container.module.scss";
import background from "../../../assets/images/space-background2.webp"

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div
      className={styles.pageContainer}
    >
      <div className={styles.overlay} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default PageContainer;
