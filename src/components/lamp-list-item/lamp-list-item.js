import React, { Fragment } from 'react';

const LampListItem = ({ lamp }) => {
  const { id, model, manufacturer } = lamp;
  return (
    <Fragment>
      <span>{`ID: ${id}`}</span>
      <span>{`MODEL: ${model}`}</span>
      <span>{`MANUFACTURER: ${manufacturer}`}</span>
    </Fragment>
  );
};

export default LampListItem;
