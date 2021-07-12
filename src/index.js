import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import LampastoreService from './services/lampastore-service';
import store from './store';
import { LampastoreServiceProvider } from './components/lampastore-service-context';

const lampastoreService = new LampastoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <LampastoreServiceProvider value={lampastoreService}>
        <Router>
          <App />
        </Router>
      </LampastoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
