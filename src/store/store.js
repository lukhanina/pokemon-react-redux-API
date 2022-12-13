import { configureStore } from '@reduxjs/toolkit';
import middlewares from '../middlewares';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import { pkmReducer } from './reducers/pkm_reducer';
import { combineReducers } from 'redux';

const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory() });

export const store = configureStore({
  reducer: combineReducers({
    router: routerReducer,
    pkmReducer
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware, ...middlewares),
});

export const history = createReduxHistory(store);
