import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Weather from './weather.js';
import Start from './startApp.js';


function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/weather">
                        <Weather />
                </Route>
                <Route path="/">
                    <Start />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;