import React from 'react';

import styles from './WeatherCard.module.scss';

const WeatherCard = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.city_name}>Paris</span>
      <div className={styles.city_icons}>
        <svg>曇り</svg>
        <svg>雨</svg>
        <svg>雷</svg>
        <svg>晴</svg>
        <svg>雪</svg>
      </div>

      {/* 気温と天気 */}
      <div className={styles.temperature_container}>
        <span className={styles.temperature_number_text}></span>
        <span className={styles.temperature_metric_text}></span>
        <span className={styles.weather_condition_text}></span>
      </div>

      {/* 最低気温、最高気温 */}
      <div className={styles.min_max_container}>
        <div className={styles.min_container}>
          <svg className={styles.min_arrow_icon} viewBox="188.5 807 21 21">
            <path
              fill="#00ff9b"
              d="M209.5 817.5h-21L199 828z"
              data-name="Min Arrow"
            />
          </svg>
          <span className={styles.min_temperature_text}>温度</span>
          <span className={styles.min_text}>Min</span>
        </div>

        <div className={styles.max_container}>
          <svg className={styles.max_arrow_icon} viewBox="449.5 820 21 21">
            <path
              fill="red"
              d="M449.5 830.5h21L460 820z"
              data-name="Max Arrow"
            />
          </svg>
          <span className={styles.max_temperature_text}>温度</span>
          <span className={styles.max_text}>Max</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
