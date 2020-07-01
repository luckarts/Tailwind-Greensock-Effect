import React from 'react';
import routes from './routes';
import PrivateRoute from './privateRoute';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
const Routes = (isAuthenticated) => {
    const routeComponents = routes.map(({ path, component, access }, key) =>
        access ? (
            <PrivateRoute path={path} component={component} key={key} isAuthenticated={isAuthenticated} />
        ) : (
            <Route exact={path ? true : false} path={path} component={component} key={key} />
        ),
    );

    return (
        <Router history={history}>
            <Switch>{routeComponents}</Switch>
        </Router>
    );
};

export default Routes;
