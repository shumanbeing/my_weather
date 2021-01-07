import React from 'react';
import AfterRoutes from './AfterRoutes/AfterRoutes';
import BeforeRoutes from './BeforeRoutes/BeforeRoutes';

const Routes: React.FC = () => {
  const token = false;
  return (
    <>
      {/* main */}
      <div>{token ? <AfterRoutes /> : <BeforeRoutes />}</div>
    </>
  );
};

export default Routes;
