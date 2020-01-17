import React from 'react';
import {Route, Switch} from 'react-router-dom';
import OrderApp from "./containers/OrderApp/OrderApp";

const App = () => (
    <Switch>
        <Route path='/' exact component={OrderApp}/>
        <Route render={() => <h1>Not found</h1>}/>
    </Switch>
);

export default App;
