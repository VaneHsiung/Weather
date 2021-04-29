import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Weather from './weather.js';
import './index.css';
import Start from './startApp.js';

export default () => {
    return (
        <Router>
            <Switch>
                <Route path="/weather">
                    <div className="center">
                        <Weather />
                    </div>
                </Route>
                <Route path="/">
                    <Start />
                </Route>
            </Switch>
        </Router>
    );
}