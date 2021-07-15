export const lampAddedToCart = (lampId) => {
  return {
    type: 'LAMP_ADDED_TO_CART',
    payload: lampId,
  };
};
export const lampIncreasedInCart = (lampId) => {
  return {
    type: 'LAMP_INCREASED_AMOUNT_IN_CART',
    payload: lampId,
  };
};
export const lampDecreasedInCart = (lampId) => {
  return {
    type: 'LAMP_DECREASED_AMOUNT_IN_CART',
    payload: lampId,
  };
};

export const lampDeletedFromCart = (lampId) => {
  return {
    type: 'LAMP_DELETED_FROM_CART',
    payload: lampId,
  };
};

const lampsRequested = () => {
  return {
    type: 'FETCH_LAMPS_REQUEST',
  };
};

const lampsLoaded = (newLamps) => {
  return {
    type: 'FETCH_LAMPS_SUCCESS',
    payload: newLamps,
  };
};

const lampsError = (error) => {
  return {
    type: 'FETCH_LAMPS_FAILURE',
    payload: error,
  };
};

const fetchLamps = (lampastoreService) => () => (dispatch) => {
  dispatch(lampsRequested());
  lampastoreService
    .getLamps()
    .then((data) => {
      dispatch(lampsLoaded(data));
    })
    .catch((err) => dispatch(lampsError(err)));
};
export { fetchLamps };
