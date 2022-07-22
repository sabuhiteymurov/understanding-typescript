import Basics from './Concepts/Basics';
import './Concepts/Classes';
import './Concepts/Interfaces';
import './Concepts/AdvancedConcepts';
import CodeWars from './Challenges/CodeWars';
import HackerRank from './Challenges/HackerRank';
import Generics from './Concepts/Generics';
import Todos from './Projects/simple-to-do/components/Todos';

export default function App() {
  Basics();
  CodeWars();
  Generics();

  return (
    <div className='App'>
      <Todos />
      <HackerRank />
    </div>
  );
}
