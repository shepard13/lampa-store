const initialState = {
  lamps: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LAMPS_LOADED':
      return {
        lamps: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
