import React, { useEffect, useState } from 'react';
import City from './City';
import LeftBtn from '../containers/LeftBtnCon';
import RightBtn from '../containers/RightBtnCon';
import Weather from './Weather';
import '../index.css';
import currentCity from '../reducers/currentCity';

// // UI Component
// let cities = ['London', 'Brisbane', 'Melbourne'];
// let citiesData = cities.map(elem => null);
// let currentCity = 0;

// const Container = props => {
//     const [state, setState] = useState({ cities, citiesData, currentCity });
//     useEffect(() => {
//         state.cities.forEach(elem => {
//             const data = null;

//             const xhr = new XMLHttpRequest();
//             xhr.withCredentials = false;

//             xhr.addEventListener("readystatechange", function () {
//                 if (this.readyState === this.DONE && this.response) {
//                     let result = this.response.name === elem ? this.response : null;
//                     citiesData[cities.indexOf(elem)] = result;
//                     setState(Object.assign({}, state, { citiesData }));
//                 } else if (this.statusText !== '') {
//                     console.log(this.statusText)
//                 }
//             });

//             xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + elem + "&appid=3e60eafdccc2b1dfacd287bf1edf8377&units=metric");
//             xhr.responseType = 'json';

//             xhr.send(data);
//         })
//     }, []);

//     // function handleLeftClick() {
//     //     let currentCity = state.currentCity;
//     //     currentCity = ((currentCity - 1) + state.cities.length) % state.cities.length;
//     //     return setState(Object.assign({}, state, { currentCity: currentCity }));
//     // }

//     // function handleRightClick() {
//     //     let currentCity = state.currentCity;
//     //     currentCity = (currentCity + 1) % state.cities.length;
//     //     return setState(Object.assign({}, state, { currentCity: currentCity }));
//     // }

//     return (
//         <div className="grid-container">
//             <City name={state.cities[state.currentCity]} />
//             <LeftBtn/>
//             <Weather city={state.citiesData[state.currentCity]} />
//             <RightBtn/>
//         </div>
//     );
// }

/*
* container 返回的是一个对象，所以需要使用解构赋值
*/
const Container = ({currentCityName, currentCityData}) => {
    return (
        <div className="grid-container">
            <City name={currentCityName} />
            <LeftBtn/>
            <Weather city={currentCityData} />
            <RightBtn/>
        </div>
    );
}

export default Container;