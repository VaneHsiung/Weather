import { combineReducers } from 'react-redux';
import cityData from './cityData';
import currentCity from './currentCity';

const reducers = combineReducers({
    cityData,
    currentCity,
})

export default reducers;