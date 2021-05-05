const currentCity = (state = 0, action) => {
    let newState = 0;
    switch (action.type) {
        case 'CHANGE_TO_LEFT_CITY':
            newState = ((action.currentCity - 1) + action.cities) % action.cities;
            return newState;
        case 'CHANGE_TO_LEFT_CITY':
            newState = (action.currentCity + 1) % action.cities;
            return newState;
        default:
            return state;
    }
}

export default currentCity;