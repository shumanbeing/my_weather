import React from 'react';
import { Link } from 'react-router-dom';
import paths from '../../../config/paths';

const SignUp: React.FC = () => {
  return (
    <div>
      signup
      <Link to={paths.signin}>SignIn</Link>
    </div>
  );
};

export default SignUp;
