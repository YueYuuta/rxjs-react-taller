import React from 'react';

import { JcjuniorProvider } from './context/jcjunior.context';
import ComponentContext1 from './components/componentContext1';
import ComponentContext2 from './components/componentContext2';

function JcJunior() {
  return (
    <div>
      <JcjuniorProvider>
        <ComponentContext1></ComponentContext1>
        <ComponentContext2></ComponentContext2>
      </JcjuniorProvider>
    </div>
  );
}

export default JcJunior;
