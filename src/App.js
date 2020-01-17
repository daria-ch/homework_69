import React from 'react';
import {Route, Switch} from 'react-router-dom';
import OrderApp from "./containers/OrderApp/OrderApp";

const App = () => (
    <Switch>
        <Route path='/' exact component={OrderApp}/>
    </Switch>
);

export default App;
