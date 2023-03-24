import React from 'react';
import { useJcjuniorContex } from '../context/jcjunior.context';

function ComponentContext2() {
  const { getJcjuniorContextValue } = useJcjuniorContex();
  return <div>value: {getJcjuniorContextValue}</div>;
}

export default ComponentContext2;
