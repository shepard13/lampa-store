import updateLampList from './lamp-list';
import updateCartList from './cart-list';
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

const reducers = (state, action) => {
  return {
    lampList: updateLampList(state, action),
    cartList: updateCartList(state, action),
  };
};

const reducer = combineReducers({
  reducers,
  form: formReducer,
});

export default reducer;
