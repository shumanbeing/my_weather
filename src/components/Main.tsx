import React from 'react';
import { Grid } from '@material-ui/core';

import AddCard from './main.components/AddCard';
import WeatherCard from './main.components/WeatherCard';
import styles from './Main.module.scss';

const Main: React.FC = () => {
  return (
    <Grid container className={styles.main_container}>
      <Grid item xs={12} sm={4}>
        <WeatherCard />
        <AddCard />
      </Grid>
    </Grid>
  );
};

export default Main;
