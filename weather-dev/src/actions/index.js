export const ADD_WEATHER_DATA = 'ADD_WEATHER_DATA';
export const CHANGE_CURRENT_CITY = 'CHANGE_CURRENT_CITY';

export const addWeatherData = (currentCity, data) => ({type: ADD_WEATHER_DATA, currentCity, data});

export const changeCurrentCity = currentCity => ({type: CHANGE_CURRENT_CITY, currentCity});