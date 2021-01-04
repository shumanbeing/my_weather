import React from 'react';
import CardHeaderContainer from './CardHeaderContainer';
import CardBodyContainer from './CardBodyContainer';

import styles from '../details.components/MainWeatherCard.module.scss';

const MainWeatherCard: React.FC = () => {
  return (
    <div className={styles.main_weather_card}>
      <CardHeaderContainer />
      <CardBodyContainer />
    </div>
  );
};

export default MainWeatherCard;
