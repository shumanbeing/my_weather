import React from 'react';

import DayWeatherContainer from './DayWeatherContainer';
import styles from './ForecastNext5Days.module.scss';

const ForecastNext5Days: React.FC = () => {
  return (
    <div>
      <DayWeatherContainer />
    </div>
  );
};

export default ForecastNext5Days;
