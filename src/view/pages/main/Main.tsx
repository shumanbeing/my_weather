import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import WeatherCard from '../../components/main/weatherCard/WeatherCard';
import AddCard from '../../components/main/addCard/AddCard';

import styles from './Main.module.scss';
import paths from '../../../config/paths';

const Main: React.FC = () => {
  return (
    <Grid container className={styles.main_container}>
      <Grid item xs={12} sm={4}>
        <Link to={paths.details}>
          <WeatherCard />
        </Link>
        <Link to={paths.add}>
          <AddCard />
        </Link>
      </Grid>
    </Grid>
  );
};

export default Main;
