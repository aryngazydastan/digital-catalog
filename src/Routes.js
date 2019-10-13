import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Fuck from './App';
import Orders from './Objects';
import 'bootstrap/dist/css/bootstrap.css';


const createRoutes = () => (
<Router history={browserHistory}>
    <Route exact path = '/' component = { Fuck }/>
    <Route exact path = '/orders' component = { Orders }/>

</Router>
);

export default createRoutes;