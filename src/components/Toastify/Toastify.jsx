import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Toastify = () => {
  const handleClick = () => {
    toast('Toastify successfully done');
  };
  return (
    <div>
      <button onClick={handleClick}>Toastify test</button>
      <ToastContainer />
    </div>
  );
};

export default Toastify;
