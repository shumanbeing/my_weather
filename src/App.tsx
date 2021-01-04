import React from 'react';
import { Router } from 'react-router-dom';
import styles from './App.module.scss';
import SideMenu from './view/components/sideMenu/SideMenu';

import history from './history';

import { Grid } from '@material-ui/core';
import Routes from './routes/Routes';
import Header from './view/components/header/Header';
import Footer from './view/components/footer/Footer';
import DetailsPage from './view/pages/detailsPage/DetailsPage';

const App: React.FC = () => {
  return (
    <>
      <div className={styles.root_container}>
        {/* <SideMenu /> */}

        <Grid>
          <Header />
        </Grid>
        <Grid>
          {/* <Main> */}
          <Router history={history}>
            <Routes />
          </Router>
          {/* </Main> */}
        </Grid>
        <Grid>
          <Footer />
        </Grid>

        {/* <DetailsPage /> */}
      </div>
    </>
  );
};

export default App;
