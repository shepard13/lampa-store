const initialState = {
  lamps: [],
  loading: true,
  error: null,
  cartItems: [
    { id: 1, title: 'test', count: 3, total: 60 },
    { id: 2, title: 'test', count: 3, total: 60 },
    { id: 3, title: 'test', count: 3, total: 60 },
  ],
  orderTotal: 180,
};

const reducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default reducer;
