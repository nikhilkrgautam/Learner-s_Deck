import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './reduxStore';
import { ZeitProvider, CssBaseline } from '@zeit-ui/react'

ReactDOM.render(
  <Provider store={store}>
    <ZeitProvider>
      <CssBaseline />
      <App />
    </ZeitProvider>
  </Provider>,
  document.getElementById('root')
);
