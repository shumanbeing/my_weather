import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import paths from '../../config/paths';
import AddCityPage from '../../view/pages/addCityPage/AddCityPage';
import DetailsPage from '../../view/pages/detailsPage/DetailsPage';
import Main from '../../view/pages/main/Main';

const AfterRoutes: React.FC = () => {
  return (
    <div>
      {/* ログイン後のページです */}
      <Switch>
        <Route exact path={paths.main} component={Main} />
        <Route exact path={paths.details} component={DetailsPage} />
        <Route exact path={paths.add} component={AddCityPage} />
        <Redirect from="/" to={paths.main} />
      </Switch>
    </div>
  );
};

export default AfterRoutes;
