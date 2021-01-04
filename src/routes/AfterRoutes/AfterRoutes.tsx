import { Details } from '@material-ui/icons';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import paths from '../../config/paths';
import AddCard from '../../view/components/main/addCard/AddCard';
import DetailsPage from '../../view/pages/detailsPage/DetailsPage';
import Main from '../../view/pages/main/Main';

const AfterRoutes: React.FC = () => {
  return (
    <div>
      ログイン後のページです
      <Main />
      <Switch>
        {/* <Route exact path={paths.top} component={Main} /> */}
        {/* <Route exact path={paths.details} component={DetailsPage} /> */}
        {/* <Route exact path={paths.add} component={AddCard} /> */}
      </Switch>
    </div>
  );
};

export default AfterRoutes;
