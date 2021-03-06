import React from 'react';
import { Link } from 'react-router-dom';
// import Link from '@material-ui/core/Link';
import { useForm } from 'react-hook-form';

import styles from './AddCityPage.module.scss';
import paths from '../../../config/paths';
import Main from '../main/Main';

const AddCityPage: React.FC = () => {
  return (
    <div className={styles.add_wrapper}>
      <div className={styles.main_card}>
        <div className={styles.city_search_wrapper}>
          <div className={styles.city_search_header}>
            <h3 className={styles.city_search_title}>SEARCH CITIES</h3>
            <div className={styles.search_city_input_wrapper}>
              <form noValidate autoComplete="off">
                <input
                  className={styles.search_city_input}
                  placeholder="search city"
                  auto-complete-placeholder="seach city"
                />
                <button className={styles.city_search_btn}>
                  <svg
                    className={styles.search_icon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 451 451"
                  >
                    <path
                      fill="#FFF"
                      d="M447 428L337.6 318.4A192.5 192.5 0 0 0 192.4 0C86.3 0 0 86.3 0 192.3s86.3 192.3 192.3 192.3c48.2 0 92.3-17.8 126-47.2L428.2 447a13.2 13.2 0 0 0 19 0 13.5 13.5 0 0 0 0-19zM27 192.3C27 101.1 101 27 192.3 27c91.1 0 165.3 74.2 165.3 165.3s-74.2 165.4-165.4 165.4A165.6 165.6 0 0 1 27 192.3z"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
            <span className={styles.city_search_hr}>o o o</span>
          </div>
          <div className={styles.city_search_body}>
            <Link to={paths.main}>仮のHomeへ戻るボタン</Link>
          </div>
        </div>
        <div className={styles.fav_city_wrapper}>
          <img
            className={styles.fav_city_image}
            src="https://www.viajarsolo.com/thumbnails/gallery_image_full/components/kcfinder/kcfinder-3.12/upload/images/0B8ejrJ3IlSZvQUdyWHgtZjdtVVE.jpg?itok=Y2KZ6rfH"
            alt="city_image"
          />
          <div className={styles.fav_city_image_overlay}></div>
          <div className={styles.fav_city_header}>
            <h3 className={styles.fav_city_title}>CITY OF THE MONTH</h3>
            <hr className={styles.fav_city_hr} />
            <span className={styles.fav_city_date}>Monday, 2nd August</span>
          </div>
          <div className={styles.fav_city_body}>
            <div className={styles.fav_city_body_subwrapper}>
              <div className={styles.fav_weather_icon}>
                {/* ここに条件分岐を記述 */}
                <svg viewBox="2436.9 -843.1 275.5 274.1">
                  <g data-name="cloudy icon" transform="translate(84 790)">
                    <circle
                      cx="137"
                      cy="137"
                      r="137"
                      fill="#fff"
                      data-name="Ellipse 23"
                      transform="translate(2354 -1633)"
                    />
                    <path
                      fill="#ffde17"
                      d="M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z"
                      data-name="Subtraction 1"
                    />
                  </g>
                </svg>
              </div>

              <div className={styles.fav_city_info}>
                <span className={styles.fav_city_temp}>-2˚</span>
                <div className={styles.fav_city_name_wrapper}>
                  <span className={styles.fav_city_name}>Rome</span>
                  <span className={styles.fav_city_country}>ITALY</span>
                </div>
                <span className={styles.fav_city_state}>
                  天気の情報（state）
                </span>
              </div>
              <button className={styles.fav_city_add_btn}>FOLLOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCityPage;
