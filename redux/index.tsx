import { createStore, Store } from 'redux';
import reducers from './reducer';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () => createStore(reducers);

export default createWrapper(makeStore, { debug: true });