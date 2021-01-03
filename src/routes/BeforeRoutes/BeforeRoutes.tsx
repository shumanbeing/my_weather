import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignIn from '../../view/pages/signIn/SignIn';
import SignUp from '../../view/pages/signUp/SignUp';
import paths from '../../config/paths';

const BeforeRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={paths.signin} component={SignIn} />
      <Route exact path={paths.signup} component={SignUp} />
      <Redirect from="/" to={paths.signin} />
    </Switch>
  );
};

export default BeforeRoutes;
