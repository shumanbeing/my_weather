import { StylesProvider } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import paths from '../../../config/paths';

import styles from './SignUp.module.scss';

const SignUp: React.FC = () => {
  return (
    <div className={styles.signup_card}>
      <Link to={paths.signin}>SignInへ移動</Link>
    </div>
  );
};

export default SignUp;
