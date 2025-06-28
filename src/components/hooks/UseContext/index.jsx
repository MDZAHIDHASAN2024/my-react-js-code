import React, { useState } from 'react';
import { userContext } from './userContext';
import User01 from './User01';

const jahid = { id: 101, name: 'jahid' };
const jakir = 'im a string';

const UseContext = () => {
  const [list, setList] = useState(jahid);
  const [list1, setList1] = useState(jakir);
  return (
    <userContext.Provider value={{ list, list1 }}>
      <User01 />
    </userContext.Provider>
  );
};

export default UseContext;
