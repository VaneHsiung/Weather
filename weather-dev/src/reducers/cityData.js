const cityData = (state = [], action) => {
    switch (action.type) {
        case 'ADD_WEATHER_DATA':
            let newState = state.slice();
            newState[action.currentCity] = data;
            return newState;
        default:
            return state;
    }
}

export default cityData;