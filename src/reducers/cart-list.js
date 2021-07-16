import {
  setItemsAmount,
  setItemsPrice,
  setItemsCart,
  getItemsAmount,
  getItemsPrice,
  getItemsCart,
  getLampsList,
} from '../local-storage';

const updateCartItems = (cartItems, item, itemIndex) => {
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, itemIndex),
      ...cartItems.slice(itemIndex + 1),
    ];
  }

  if (itemIndex === -1) {
    return [...cartItems, item];
  }
  return [
    ...cartItems.slice(0, itemIndex),
    item,
    ...cartItems.slice(itemIndex + 1),
  ];
};

const updateCartItem = (lamp, item = {}, quantity) => {
  const { id = lamp.id, count = 0, title = lamp.title, total = 0 } = item;
  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * lamp.price,
  };
};

const updateCartTotalPrice = (itemsInCartArr) => {
  //set date in state
  const itemTotalArr = itemsInCartArr.map((item) => item.total);
  const total = itemTotalArr.reduce((fItem, sItem) => fItem + sItem, 0);
  // setItemsPrice(total)  Set date in localStorage
  setItemsPrice(total);
  return total;
};

const updateCartTotalAmount = (itemsInCartArr) => {
  //set date in state
  const itemTotalArr = itemsInCartArr.map((item) => item.count);
  const total = itemTotalArr.reduce((fItem, sItem) => fItem + sItem, 0);
  //setItemsCart(itemTotalArr) Set the arr of objects(products) in the localStorage
  setItemsCart(itemsInCartArr);
  // setItemsAmount(total)  Set value(number) of total amount of products in cart in the localStorage
  setItemsAmount(total);
  return total;
};

const updateOrder = (state, lampId, quantity) => {
  const {
    cartList: { cartItems },
  } = state;
  const lamps = getLampsList();
  const lamp = lamps.find((lamp) => lamp.id === lampId);
  const itemIndex = cartItems.findIndex(({ id }) => id === lampId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(lamp, item, quantity);
  const itemsInCartArr = updateCartItems(cartItems, newItem, itemIndex);
  return {
    cartItemsAmount: updateCartTotalAmount(itemsInCartArr),
    cartTotal: updateCartTotalPrice(itemsInCartArr),
    cartItems: itemsInCartArr,
  };
};

const updateCartList = (state, action) => {
  if (state === undefined) {
    if (getItemsPrice() > 0) {
      return {
        cartItemsAmount: getItemsAmount(),
        cartItems: getItemsCart(),
        cartTotal: getItemsPrice(),
      };
    }
    return {
      cartItemsAmount: 0,
      cartItems: [],
      cartTotal: 0,
    };
  }

  switch (action.type) {
    case 'LAMP_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);
    case 'LAMP_DELETED_FROM_CART':
      const item = state.cartList.cartItems.find(
        ({ id }) => id === action.payload
      );
      return updateOrder(state, action.payload, -item.count);
    case 'LAMP_DECREASED_AMOUNT_IN_CART':
      return updateOrder(state, action.payload, -1);

    default:
      return state.cartList;
  }
};
export default updateCartList;
