import React, { useContext, useState } from 'react';
import { UsersContext } from '../UseContext/UseContext';

const NewUser = () => {
  const [newUser, setNewUser] = useState('');
  const { addUser, users } = useContext(UsersContext);
  const handleAddUser = (e) => {
    e.preventDefault();
    const newUserName = {
      id: new Date().getTime().toString(),
      name: newUser,
    };
    addUser(newUserName);
  };
  return (
    <div>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          value={newUser}
          required
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewUser;
