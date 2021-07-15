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

const updateOrder = (state, lampId, quantity) => {
  const {
    lampList: { lamps },
    cartList: { cartItems },
  } = state;
  const lamp = lamps.find((lamp) => lamp.id === lampId);
  const itemIndex = cartItems.findIndex(({ id }) => id === lampId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(lamp, item, quantity);
  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
  };
};
const updateCartList = (state, action) => {
  if (state === undefined) {
    return {
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
