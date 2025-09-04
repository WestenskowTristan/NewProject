import React, { ReactNode } from 'react';
import styles from './page-container.module.scss';

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer = ({
  children,
}: PageContainerProps) => {
  return (
    <div className={`${styles.pageContainer}`}>
      {children}
    </div>
  );
};

export default PageContainer;