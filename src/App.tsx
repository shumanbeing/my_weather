import React from 'react';
import styles from './App.module.scss';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Container } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <>
      <Container className={styles.root_container}>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </Container>
    </>
  );
};

export default App;
