import React from 'react';
import ReactDOM from 'react-dom/client';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import MyRouter from './router';
import { store, history } from './store/store';
import { Provider } from 'react-redux';
import ScrollToTop from './components/containers/ScrollToTop/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <Provider store={store}>
    <Router history={history}>
      <ScrollToTop />
      <MyRouter />
    </Router>
  </Provider>
)
