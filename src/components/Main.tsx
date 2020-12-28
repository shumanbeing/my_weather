import React from 'react';
import AddCard from './main.components/AddCard';
import WeatherCard from './main.components/WeatherCard';
import styles from './Main.module.scss';

const Main: React.FC = () => {
  return (
    <div className={styles.main_container}>
      <WeatherCard />
      <AddCard />
    </div>
  );
};

export default Main;
