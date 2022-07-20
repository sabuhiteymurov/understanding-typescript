import React from 'react';
import Basics from './Basics';
import './Classes';
import './Interfaces';
import './AdvancedConcepts';
import CodeWars from './CodeWars';
import HackerRank from './HackerRank';

export default function App() {
  Basics();
  CodeWars();

  return (
    <div className='App'>
      <h1>Understanding TypeScript</h1>
      <HackerRank />
      <input type='text' id='user-input' placeholder='type here' />
    </div>
  );
}
