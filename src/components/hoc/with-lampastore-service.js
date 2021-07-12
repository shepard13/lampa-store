import React from 'react';
import { LampastoreServiceConsumer } from '../lampastore-service-context';

const withLampastoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <LampastoreServiceConsumer>
        {(lampastoreService) => {
          return <Wrapped {...props} lampastoreService={lampastoreService} />;
        }}
      </LampastoreServiceConsumer>
    );
  };
};

export default withLampastoreService;
