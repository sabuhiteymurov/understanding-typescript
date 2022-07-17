import React from 'react';
import Basics from './Basics';

function App() {
  Basics();

  const combine = (input1: number | string, input2: number | string) => {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
      result = input1 + input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  };

  const combinedAges = combine(30, 20);
  console.log(combinedAges);

  const combinedNames = combine('Sabuhi', 'Teymurov');
  console.log(combinedNames);

  return (
    <div className='App'>
      <h1>Understanding TypeScript</h1>
    </div>
  );
}

export default App;
