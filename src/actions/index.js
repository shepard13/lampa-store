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

const fetchLamps = (lampastoreService, dispatch) => () => {
  dispatch(lampsRequested());
  lampastoreService
    .getLamps()
    .then((data) => {
      dispatch(lampsLoaded(data));
    })
    .catch((err) => dispatch(lampsError(err)));
};

export { fetchLamps };
