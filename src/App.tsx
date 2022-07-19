import React from 'react';
import Basics from './Basics';
import './Classes';
import './Interfaces';
import './AdvancedConcepts';
import CodeWars from './CodeWars';

function App() {
  Basics();
  CodeWars();

  return (
    <div className='App'>
      <h1>Understanding TypeScript</h1>
      <input type='text' id='user-input' />
    </div>
  );
}

export default App;
