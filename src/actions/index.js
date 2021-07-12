const lampsLoaded = (newLamps) => {
  return {
    type: 'LAMPS_LOADED',
    payload: newLamps,
  };
};

export { lampsLoaded };
