import React from 'react';

function App() {
  const add = (n1: number, n2: number, showResult: boolean) => {
    if (showResult) return n1 + n2;
  };

  const number1 = 5;
  const number2 = 7.2;
  const printResult = true;

  const result = add(number1, number2, printResult);
  console.log(result);

  return (
    <div className='App'>
      <h1>Understanding TypeScript</h1>
    </div>
  );
}

export default App;
