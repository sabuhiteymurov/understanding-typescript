import React from 'react';
import Basics from './Basics';
import './Classes';
import './Interfaces';
import CodeWars from './CodeWars';

function App() {
  Basics();
  CodeWars();

  return (
    <div className='App'>
      <h1>Understanding TypeScript</h1>
    </div>
  );
}

export default App;
