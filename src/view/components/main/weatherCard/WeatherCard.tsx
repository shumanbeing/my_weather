import React from 'react';

import styles from './WeatherCard.module.scss';

const WeatherCard: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.city_name}>Paris</span>
      <div className={styles.weather_icon_container}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="275.522"
          height="274.091"
          viewBox="0 0 275.522 274.091"
        >
          <g
            id="cloudy_icon"
            data-name="cloudy icon"
            transform="translate(-2352.885 1633.091)"
          >
            <circle
              id="Ellipse_23"
              data-name="Ellipse 23"
              cx="137"
              cy="137"
              r="137"
              transform="translate(2354 -1633)"
              fill="#fff"
            />
            <path
              id="Subtraction_1"
              data-name="Subtraction 1"
              d="M-1755.089,1486.6l0,0a37.216,37.216,0,0,0,8.359-23.415c0-22.035-19.784-39.962-44.1-39.962-1.124,0-2.253.038-3.354.113v-.113h-.495a39.755,39.755,0,0,0-39.466-33.651,40.146,40.146,0,0,0-9.916,1.239,39.916,39.916,0,0,0-35.3-21.22,40.108,40.108,0,0,0-38.45,29.04,137.432,137.432,0,0,1-7.82-45.866,138.777,138.777,0,0,1,2.8-27.764,137.066,137.066,0,0,1,8.027-25.859,137.781,137.781,0,0,1,12.7-23.4,138.758,138.758,0,0,1,16.822-20.388,138.764,138.764,0,0,1,20.388-16.822,137.789,137.789,0,0,1,23.4-12.7,137.072,137.072,0,0,1,25.859-8.027,138.775,138.775,0,0,1,27.764-2.8,138.775,138.775,0,0,1,27.764,2.8,137.067,137.067,0,0,1,25.859,8.027,137.785,137.785,0,0,1,23.4,12.7,138.759,138.759,0,0,1,20.388,16.822,138.741,138.741,0,0,1,16.822,20.388,137.784,137.784,0,0,1,12.7,23.4,137.067,137.067,0,0,1,8.027,25.859,138.777,138.777,0,0,1,2.8,27.764,137.411,137.411,0,0,1-7.929,46.175,137.23,137.23,0,0,1-21.964,39.522,138.173,138.173,0,0,1-33.261,30.133,136.764,136.764,0,0,1-41.819,18.007Z"
              transform="translate(4278.521 -2848.091)"
              fill="#ffde17"
            />
          </g>
        </svg>

        {/* <svg>雨</svg> */}
        {/* <svg>雷</svg>
        <svg>晴</svg>
        <svg>雪</svg> */}
      </div>

      {/* 気温と天気 */}
      <div className={styles.temperature_container}>
        <span className={styles.temperature_number_text}>7</span>
        <span className={styles.temperature_metric_text}>°</span>
        <span className={styles.weather_condition_text}>cloudy</span>
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
          <span className={styles.min_temperature_text}>11</span>
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
          <span className={styles.max_temperature_text}>22</span>
          <span className={styles.max_text}>Max</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
