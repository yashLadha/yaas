import { createStore, applyMiddleware, compose } from 'redux'
import { Reducer } from './Reducer'
import thunk from 'redux-thunk'

export const ConfigureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const Store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk)));
  return Store;
};
