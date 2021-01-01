import React from 'react';

import MainWeatherCard from './details.components/MainWeatherCard';
import styles from './DetailsPage.module.scss';

const DetailsPage = () => {
  return (
    <div className={styles.details_page_wrapper}>
      <svg
        className={styles.background_gradient_circle}
        viewBox="4572 73 1328 1328"
      >
        <defs>
          <linearGradient
            id="ddd"
            x2="0"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#ff8b8b" />
            <stop offset="1" stop-color="#6676ff" />
          </linearGradient>
        </defs>
        <circle
          cx="664"
          cy="664"
          r="664"
          fill="url(#ddd)"
          transform="translate(4572 73)"
        />
      </svg>

      {/* ここに戻るボタンを配置 */}

      <MainWeatherCard />
    </div>
  );
};

export default DetailsPage;
