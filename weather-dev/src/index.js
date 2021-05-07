import React from 'react';
import { render } from 'react-dom';
import AppRouter from './router.js';


import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';

/*
* state 有两种初始化方法，我觉得第二种方便：
* https://www.redux.org.cn/docs/recipes/reducers/InitializingState.html
* 因为这样的话，state 与 reduer 是一一对应的，每添加一个 reduer，就相当于添加state的一部分
*/
let store = createStore(reducer);

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);