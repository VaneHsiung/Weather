import { combineReducers } from 'redux';
import cityData from './cityData';
import currentCity from './currentCity';
import cities from './cities';

/*
* combineReducers 是 redux 模块的，而不是 react-redux 模块的
* 在 react 中使用 redux， 需要同时安装 redux 与 react-redux 模块
*/

const reducers = combineReducers({
    cities,
    cityData,
    currentCity,
})



export default reducers;