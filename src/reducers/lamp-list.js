const updateLampList = (state, action) => {
  if (state === undefined) {
    return {
      lamps: [],
      loading: true,
      error: null,
    };
  }
  switch (action.type) {
    case 'FETCH_LAMPS_REQUEST':
      return {
        lamps: [],
        loading: true,
        error: false,
      };
    case 'FETCH_LAMPS_SUCCESS':
      return {
        lamps: action.payload,
        loading: false,
        error: false,
      };
    case 'FETCH_LAMPS_FAILURE':
      return {
        lamps: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state.lampList;
  }
};

export default updateLampList;
