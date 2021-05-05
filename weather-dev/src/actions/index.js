export const addWeatherData = (currentCity, data) => ({type: 'ADD_WEATHER_DATA', currentCity, data});

export const changeToLeftCity = (currentCity, cities) => ({type: 'CHANGE_TO_LEFT_CITY', currentCity, cities});

export const changeToRightCity = (currentCity, cities) => ({type: 'CHANGE_TO_LEFT_CITY', currentCity, cities})