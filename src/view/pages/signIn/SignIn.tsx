import React from 'react';
import { Link } from 'react-router-dom';
import paths from '../../../config/paths';

const SignIn: React.FC = () => {
  return (
    <div>
      signin
      <Link to={paths.signup}>SignUpへ</Link>
    </div>
  );
};

export default SignIn;
