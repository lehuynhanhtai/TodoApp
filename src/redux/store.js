import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';

const enhansers = composeWithDevTools();
const store = createStore(rootReducer, enhansers);

export default store;