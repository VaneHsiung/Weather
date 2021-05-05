import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Weather from './components/Container';
import StartApp from './components/StartApp';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/weather">
                    <Weather />
                </Route>
                <Route path="/">
                    <StartApp />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;