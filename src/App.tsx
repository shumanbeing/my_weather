import React from 'react';
import { Router } from 'react-router-dom';
import styles from './App.module.scss';
import SideMenu from './components/SideMenu';

import history from './history';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import DetailsPage from './components/DetailsPage';

import { Container, Grid } from '@material-ui/core';
import Routes from './routes/Routes';

const App: React.FC = () => {
  return (
    <>
      <div className={styles.root_container}>
        <SideMenu />

        <Grid>
          <Header></Header>
        </Grid>
        <Grid>
          {/* <Main> */}
          <Router history={history}>
            <Routes />
          </Router>
          {/* </Main> */}
        </Grid>
        <Grid>
          <Footer></Footer>
        </Grid>

        {/* <DetailsPage /> */}
      </div>
    </>
  );
};

export default App;
