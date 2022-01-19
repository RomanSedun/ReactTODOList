import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import App from './App';
import reducer from './reducers';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 62.5%;
  background: #f5f5f5;
}
`;

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Global />
    <App />
  </Provider>,
  document.getElementById('root'),
);
