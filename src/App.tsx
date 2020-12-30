import React from 'react';
import styles from './App.module.scss';
import SideMenu from './components/SideMenu';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Container, Grid } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <>
      <div className={styles.root_container}>
        <SideMenu />

        {/* <Grid>
          <Header></Header>
        </Grid>
        <Grid>
          <Main></Main>
        </Grid>
        <Grid>
          <Footer></Footer>
        </Grid> */}
      </div>
    </>
  );
};

export default App;
