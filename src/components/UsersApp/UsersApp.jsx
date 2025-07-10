import React from 'react';

import User01 from './User01';
import UsersProvider from '../UseContext/UseContext';
import NewUser from './NewUser';

const UsersApp = () => {
  return (
    <UsersProvider>
      <NewUser />
      <User01 />
    </UsersProvider>
  );
};

export default UsersApp;
