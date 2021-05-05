import React from 'react';
import '../index.css';

const StartApp = () => {
    return (
        <div className="center">
            <a href="/weather" className="custom-a">
                <i className="fa fa-rocket fa-2x"></i>Start App
            </a>
        </div>
    );
}

export default StartApp;