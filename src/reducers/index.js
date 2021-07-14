const initialState = {
  lamps: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 180,
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'FETCH_LAMPS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_LAMPS_SUCCESS':
      return {
        ...state,
        lamps: action.payload,
        loading: false,
      };
    case 'FETCH_LAMPS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'LAMP_ADDED_TO_CART':
      const lampId = action.payload;
      const lamp = state.lamps.find((lamp) => lamp.id === lampId);
      const { id, title, price } = lamp;
      const newItem = { id, title, count: 1, total: price };

      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
      };
    default:
      return state;
  }
};

export default reducer;
