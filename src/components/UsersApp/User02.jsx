import React, { useContext } from 'react';
import { UsersContext } from '../UseContext/UseContext';

const User02 = () => {
  const { addUser, users } = useContext(UsersContext);
  return (
    <div>
      {users.map((user) => {
        return (
          <article key={user.id}>
            <h2>{user.id}</h2>
            <h5>{user.name}</h5>
          </article>
        );
      })}
    </div>
  );
};

export default User02;
