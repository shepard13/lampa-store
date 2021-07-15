import updateLampList from './lamp-list';
import updateCartList from './cart-list';

const reducer = (state, action) => {
  return {
    lampList: updateLampList(state, action),
    cartList: updateCartList(state, action),
  };
};

export default reducer;
