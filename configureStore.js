import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/redux/reducers';
import {createLogger} from 'redux-logger';

const logger = createLogger();

export default function configureStore() {
  return createStore(rootReducer, {}, applyMiddleware(thunk, logger));
}
