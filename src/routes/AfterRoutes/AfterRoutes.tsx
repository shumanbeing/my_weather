import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../../components/Main';
import paths from '../../config/paths';

const AfterRoutes: React.FC = () => {
  return (
    <div>
      after routes
      <Switch>
        <Route exact path={paths.top} component={Main} />
        <Route exact path={paths.details} component={Main} />
        <Route exact path={paths.add} component={Main} />
      </Switch>
    </div>
  );
};

export default AfterRoutes;
