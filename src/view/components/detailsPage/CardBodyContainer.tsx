import React from 'react';

import TwitterFeed from './TwitterFeed';
import ForecastNext5Days from './ForecastNext5Days';

import styles from './CardBodyContainer.module.scss';

const CardBodyContainer: React.FC = () => {
  return (
    <div>
      <TwitterFeed />
      <ForecastNext5Days />
    </div>
  );
};

export default CardBodyContainer;
