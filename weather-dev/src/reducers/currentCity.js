const currentCity = (state = 0, action) => {
    switch (action.type) {
        case 'CHANGE_CURRENT_CITY':
            return action.currentCity;
        default:
            return state;
    }
}