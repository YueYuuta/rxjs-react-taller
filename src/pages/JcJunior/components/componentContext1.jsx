import React from 'react';
import { useJcjuniorContex } from '../context/jcjunior.context';

function ComponentContext1() {
  const { setJcjuniorConetxtValue } = useJcjuniorContex();

  const handleClick = () => {
    setJcjuniorConetxtValue('hola mi ciela');
  };
  return (
    <div>
      {' '}
      <button onClick={handleClick}>send information</button>
    </div>
  );
}

export default ComponentContext1;
