import React from 'react';
import AfterRoutes from './AfterRoutes/AfterRoutes';
import BeforeRoutes from './BeforeRoutes/BeforeRoutes';
import styles from './Routes.module.scss';

const Routes: React.FC = () => {
  const token = false;
  return (
    <>
      {/* main */}
      <div className={styles.main_container}>
        {token ? <AfterRoutes /> : <BeforeRoutes />}
      </div>
    </>
  );
};

export default Routes;
