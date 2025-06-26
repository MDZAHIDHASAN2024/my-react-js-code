import React, { createRef } from 'react';

const UseRef = () => {
  const useNameRef = createRef();
  const useEmailRef = createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = useNameRef.current.value;
    const emailValue = (useEmailRef.current.style.color = 'red');
    console.log(nameValue);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="div">
          <label htmlFor="name">
            Name:
            <input type="text" name="name" id="name" ref={useNameRef} />
          </label>
        </div>
        <div className="div">
          <label htmlFor="email">
            Email:
            <input type="email" name="email" id="email" ref={useEmailRef} />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseRef;
