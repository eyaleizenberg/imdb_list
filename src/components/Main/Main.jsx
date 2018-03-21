/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './main.css';
import AppContainer from '../../containers/appContainer';
import registerServiceWorker from '../../registerServiceWorker';
import configureStore from '../../store/configureStore';

const store = configureStore({});

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    document.getElementById('root'),
  );

  registerServiceWorker();
};

export default renderApp;
