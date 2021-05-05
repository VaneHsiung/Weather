let london = {
    coord: { lon: -0.13, lat: 51.51 },
    weather: [{
      main: 'Drizzle',
      description: 'London light intensity drizzle',
      icon: 'London',
    }],
    main: {
      temp: 280.32,
      temp_min: 279.15,
      temp_max: 281.15,
    },
    name: 'London',
  }
  
  let brisbane = {
    coord: { lon: -0.13, lat: 51.51 },
    weather: [{
      main: 'Drizzle',
      description: 'Brisbane light intensity drizzle',
      icon: 'Brisbane',
    }],
    main: {
      temp: 300,
      temp_min: 200,
      temp_max: 500,
    },
    name: 'Brisbane',
  }
  
  let melbourne = {
    coord: { lon: -0.13, lat: 51.51 },
    weather: [{
      main: 'Drizzle',
      description: 'Melbourne light intensity drizzle',
      icon: 'Melbourne',
    }],
    main: {
      temp: 280.32,
      temp_min: 279.15,
      temp_max: 281.15,
    },
    name: 'Melbourne',
  }
  
  let preCityData = [ london, brisbane, melbourne];


const cityData = (state = preCityData, action) => {
    switch (action.type) {
        case 'ADD_WEATHER_DATA':
            let newState = state.slice();
            newState[action.currentCity] = action.data;
            return newState;
        default:
            return state;
    }
}

export default cityData;