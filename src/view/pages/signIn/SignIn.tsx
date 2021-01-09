import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// import Link from '@material-ui/core/Link';

import { Button } from '@material-ui/core';
import paths from '../../../config/paths';

import styles from './SignIn.module.scss';

interface UserID {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<UserID>();
  const onSubmit = (data: UserID) => console.log(data);

  return (
    <div className={styles.main_container}>
      <div className={styles.login_card}>
        <div className={styles.login_content}>
          <span className={styles.login_header}>Login</span>
          {/* ----login form---- */}
          <form
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            className={styles.login_form}
          >
            <input
              className={styles.login_input}
              ref={register({
                required: '正しくありません',
              })}
              placeholder="Email"
              name="email"
              type="email"
              autoFocus={false}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <input
              className={styles.login_input}
              ref={register({
                required: '正しくありません',
              })}
              placeholder="Password"
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {errors.password && <p>{errors.password.message}</p>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={styles.login_button}
            >
              Login
            </Button>
          </form>
          <div className={styles.signup_link_wrapper}>
            <span className={styles.signup_notice}>Don't have an account?</span>
            <Link to={paths.signup} className={styles.signup_link}>
              {'Sign Up'}
            </Link>
          </div>
        </div>

        <div className={styles.login_aside}>
          <div className={styles.login_aside_overlay}></div>
          <h1 className={styles.login_welcome_text}>Welcome Back!</h1>
          <hr className={styles.login_aside_hr}></hr>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
