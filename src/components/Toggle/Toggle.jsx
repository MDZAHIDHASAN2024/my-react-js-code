import React, { useState } from 'react';

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      {toggle && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officia
          quas enim quam debitis odio pariatur incidunt fuga exercitationem
          veniam! Cupiditate dolor ratione repellat provident exercitationem
          quasi, ipsam quos consectetur sit, eum quae culpa ex eveniet molestias
          magnam impedit dolorum, sequi ab consequuntur. Nemo quidem dolorem
          soluta possimus repellendus! Tempora.
        </p>
      )}
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? ' Hide Paragraph' : 'Show Paragraph'}
      </button>
    </div>
  );
};

export default Toggle;
