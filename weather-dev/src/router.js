import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Weather from './containers/ContainerCon';
import StartApp from './components/StartApp';
import './index.css';




const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/weather">
                    <div className="center">
                        <Weather />
                    </div>
                </Route>
                <Route path="/">
                    <StartApp />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;