import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// import Link from '@material-ui/core/Link';

import { Button } from '@material-ui/core';
import paths from '../../../config/paths';

import styles from './SignUp.module.scss';

interface RegisterID {
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<RegisterID>();
  const onSubmit = (data: RegisterID) => console.log(data);

  return (
    <div className={styles.main_container}>
      <div className={styles.signup_card}>
        <div className={styles.signup_content}>
          <span className={styles.signup_header}>Signup</span>
          {/* ----signup form---- */}
          <form
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            className={styles.signup_form}
          >
            <input
              className={styles.signup_input}
              ref={register({
                required: '必須項目',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: '正しいEメールを入力してください',
                },
              })}
              placeholder="Email"
              name="email"
              type="email"
              autoFocus={false}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <input
              className={styles.signup_input}
              ref={register({
                required: '必須項目',
                minLength: { value: 6, message: '6文字以上です' },
                maxLength: { value: 10, message: '10文字以下です' },
                pattern: { value: /^[a-zA-Z0-9]+$/, message: '半角英数字です' },
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
              className={styles.signup_button}
            >
              SignUp
            </Button>
          </form>
          <div className={styles.login_link_wrapper}>
            <span className={styles.login_notice}>
              Already Have an account?
            </span>
            <Link to={paths.signin} className={styles.login_link}>
              {'Login'}
            </Link>
          </div>
        </div>

        <div className={styles.signup_aside}>
          <div className={styles.signup_aside_overlay}></div>
          <h1 className={styles.signup_welcome_text}>Join us Now!</h1>
          <hr className={styles.signup_aside_hr}></hr>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
