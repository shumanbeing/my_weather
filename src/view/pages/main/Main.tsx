import React from 'react';
import { Grid } from '@material-ui/core';

import WeatherCard from '../../components/main/weatherCard/WeatherCard';
import AddCard from '../../components/main/addCard/AddCard';

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
