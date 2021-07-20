import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';

const logMiddleware = () => (next) => (action) => {
  console.log(action.type);
  return next(action);
};

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, logMiddleware)
);
export default store;
