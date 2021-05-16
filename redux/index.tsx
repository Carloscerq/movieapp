import { createStore, Store } from 'redux';
import {rootReducer} from './reducer';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () => createStore(rootReducer);

export default createWrapper(makeStore, { debug: false });