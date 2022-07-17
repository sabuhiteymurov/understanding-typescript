import React from 'react';
import Basics from './Basics';

function App() {
  Basics();

  /*
  type Combinable = number | string;
  type ConversionDescriptor = 'as-number' | 'as-text';

  const combine = (
    input1: Combinable,
    input2: Combinable,
    resultType: ConversionDescriptor
  ) => {
    let result;
    if (
      (typeof input1 === 'number' && typeof input2 === 'number') ||
      resultType === 'as-number'
    ) {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  };

  const combinedAges = combine(30, 20, 'as-number');
  console.log(combinedAges);

  const combinedStringAges = combine('20', '39', 'as-number');
  console.log(combinedStringAges);

  const combinedNames = combine('Sabuhi', 'Teymurov', 'as-text');
  console.log(combinedNames);
  */

  const add = (n1: number, n2: number) => {
    return n1 + n2;
  };

  const printResult = (num: number): void => {
    console.log('Result: ' + num);
  };

  printResult(add(5, 12));

  return (
    <div className='App'>
      <h1>Understanding TypeScript</h1>
    </div>
  );
}

export default App;
