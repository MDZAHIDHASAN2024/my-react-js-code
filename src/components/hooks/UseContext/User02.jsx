import React, { useContext } from 'react';
import { userContext } from './userContext';

const User02 = () => {
  const { list, list1 } = useContext(userContext);
  return (
    <div>
      <h1>{list.id}</h1>
      <h1>{list1}</h1>
    </div>
  );
};

export default User02;
