import React from 'react';
import { render } from 'react-dom';
import AppRouter from './router.js';


import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';

/*
* state 有两种初始化方法，我觉得第二种方便：
* https://www.redux.org.cn/docs/recipes/reducers/InitializingState.html
*/
let store = createStore(reducer);

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);