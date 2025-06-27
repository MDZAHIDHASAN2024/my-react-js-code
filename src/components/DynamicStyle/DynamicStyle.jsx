import React, { useState } from 'react';

const DynamicStyle = () => {
  const [store, setStore] = useState('');
  return (
    <div>
      console.log(store);
      <p style={{ color: `${store}` }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic tempore
        animi adipisci facilis? Sed doloribus dolores, voluptatum fugiat
        distinctio dolor repellendus eligendi vero saepe, sapiente non illum
        recusandae quas repellat, error ducimus modi excepturi animi sequi odit
        aspernatur possimus. Praesentium.
      </p>
      <button value="red" onClick={(e) => setStore(e.target.value)}>
        Red
      </button>
      <button value="green" onClick={(e) => setStore(e.target.value)}>
        Green
      </button>
      <button value="blue" onClick={(e) => setStore(e.target.value)}>
        Blue
      </button>
    </div>
  );
};

export default DynamicStyle;
