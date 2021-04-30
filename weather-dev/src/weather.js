import React, { useEffect, useState } from 'react';
import './index.css';

// UI Component
let cities = ['London', 'Brisbane', 'Melbourne'];
let citiesData = cities.map(elem => null);
let currentCity = 0;

export default function Container(props) {
    const [state, setState] = useState({ cities, citiesData, currentCity });
    useEffect(() => {
        cities.forEach(elem => {
            //这个 API 不仅限制每分钟请求的次数，免费版限制 500 次每月
            const data = null;

            const xhr = new XMLHttpRequest();
            xhr.withCredentials = false;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === this.DONE && this.response) {
                    let result = this.response.name === elem ? this.response : null;
                    citiesData[cities.indexOf(elem)] = result;
                    setState(Object.assign({}, state, { citiesData }));
                } else if (this.statusText !== '') {
                    console.log(this.statusText)
                }
            });

            xhr.open("GET", "https://community-open-weather-map.p.rapidapi.com/weather?q=" + elem + "&units=metric");
            xhr.setRequestHeader("x-rapidapi-key", "ba47353b31msh47b3ee3b762e748p1ce058jsn3dd2477d9dc4");
            xhr.setRequestHeader("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com");
            xhr.responseType = 'json';

            xhr.send(data);
        })

    }, [state.cities]);

    function handleLeftClick() {
        let currentCity = state.currentCity;
        currentCity = ((currentCity - 1) + state.cities.length) % state.cities.length;
        return setState(Object.assign({}, state, { currentCity: currentCity }));
    }

    function handleRightClick() {
        let currentCity = state.currentCity;
        currentCity = (currentCity + 1) % state.cities.length;
        return setState(Object.assign({}, state, { currentCity: currentCity }));
    }

    return (
        <div className="grid-container">
            <City name={state.cities[state.currentCity]} />
            <LeftBtn onClick={() => handleLeftClick()} />
            <Weather city={state.citiesData[state.currentCity]} />
            <RightBtn onClick={() => handleRightClick()} />
        </div>
    );
}

function City(props) {
    return (
        <div className="city">
            <h1>{props.name}</h1>
        </div>
    );
}

function LeftBtn(props) {
    return (
        <button className="left-btn" onClick={() => props.onClick()}>
            <i className="fa fa-chevron-left fa-4x"></i>
            <span className="sr-only">LeftBtn</span>
        </button>
    );
}

function RightBtn(props) {
    return (
        <button className="right-btn" onClick={() => props.onClick()}>
            <i className="fa fa-chevron-right fa-4x"></i>
            <span className="sr-only">RightBtn</span>
        </button>
    );
}

function Weather(props) {
    if (!props.city) {
        return (
            <div className="weather">
                <i className="fa fa-refresh fa-spin fa-5x fa-fw"></i>
                <span className="sr-only">Loading...</span>
            </div>);
    } else {
        let { weather: [weather], main: temp } = props.city;
        return (
            <div className="weather grid-weather">
                <WeatherIcon icon={weather.icon} />
                <Temp temp={temp.temp} />
                <MinTemp temp={temp.temp_min} />
                <MaxTemp temp={temp.temp_max} />
                <Description desc={weather.description} />
            </div>
        );
    }
}

function WeatherIcon(props) {
    let url = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/" + props.icon + ".png";
    return (
        <div className='icon'>
            <img src={url} alt={props.icon} className="icon" />
        </div>
    );
}

function Temp(props) {
    return (
        <div className="temp">
            <h2>{props.temp}&#8451;</h2>
        </div>
    );
}

function MinTemp(props) {
    return (
        <div className="temp-min">{props.temp}&#8451;</div>
    );
}

function MaxTemp(props) {
    return (
        <div className="temp-max">{props.temp}&#8451;</div>
    );
}

function FristWordUpperCase(str) {
    let words = str.split(' ');
    words = words.map(word => {
        word = word.toLowerCase();
        let chars = word.split('');
        chars[0] = chars[0].toUpperCase();
        return chars.join('');
    });
    return words.join(' ');
}

function Description(props) {
    return (
        <div className="desc">
            <h2>{FristWordUpperCase(props.desc)}</h2>
        </div>
    );
}

//data
// let london = {
//     coord: { lon: -0.13, lat: 51.51 },
//     weather: [{
//         main: 'Drizzle',
//         description: 'London light intensity drizzle',
//         icon: 'London',
//     }],
//     main: {
//         temp: 280.32,
//         temp_min: 279.15,
//         temp_max: 281.15,
//     },
//     name: 'London',
// }

// let brisbane = {
//     coord: { lon: -0.13, lat: 51.51 },
//     weather: [{
//         main: 'Drizzle',
//         description: 'Brisbane light intensity drizzle',
//         icon: 'Brisbane',
//     }],
//     main: {
//         temp: 300,
//         temp_min: 200,
//         temp_max: 500,
//     },
//     name: 'Brisbane',
// }

// let melbourne = {
//     coord: { lon: -0.13, lat: 51.51 },
//     weather: [{
//         main: 'Drizzle',
//         description: 'Melbourne light intensity drizzle',
//         icon: 'Melbourne',
//     }],
//     main: {
//         temp: 280.32,
//         temp_min: 279.15,
//         temp_max: 281.15,
//     },
//     name: 'Melbourne',
// }