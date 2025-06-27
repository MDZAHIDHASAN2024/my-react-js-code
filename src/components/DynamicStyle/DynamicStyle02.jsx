import React, { useState } from 'react';

import './DynamicStyle.css';

const DynamicStyle02 = () => {
  const [style, setStyle] = useState(true);
  const [classStyle, setClassStyle] = useState(true);
  return (
    <div>
      <p style={{ color: style ? 'red' : 'blue' }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
        cupiditate nisi maiores, incidunt odio possimus suscipit reiciendis
        accusantium beatae ut hic itaque ab molestiae doloribus nam ipsam
        expedita libero tempore rerum placeat quisquam accusamus autem. Eum
        tenetur modi consequuntur nostrum.
      </p>

      <p className={`${classStyle ? 'choice-jahid' : 'choice-jakir'}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quam
        quasi a aperiam accusamus. Doloremque adipisci placeat a, ex inventore
        quis, dicta rerum, alias error similique ut nostrum quisquam laborum.
        Ullam voluptatibus, nulla a eius itaque quisquam asperiores sit
        quibusdam.
      </p>
      <button onClick={() => setClassStyle(true)}>Jahid Style</button>
      <button onClick={() => setClassStyle(false)}>Jakir Style</button>
    </div>
  );
};

export default DynamicStyle02;
