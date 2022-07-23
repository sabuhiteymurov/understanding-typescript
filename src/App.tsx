import Basics from './Concepts/Basics';
import './Concepts/Classes';
import './Concepts/Interfaces';
import './Concepts/AdvancedConcepts';
import CodeWars from './Challenges/CodeWars';
import HackerRank from './Challenges/HackerRank';
import Generics from './Concepts/Generics';
import Todos from './Projects/simple-to-do/components/Todos';
import NewTodo from './Projects/simple-to-do/components/NewTodo';

export default function App() {
  Basics();
  CodeWars();
  Generics();

  return (
    <div className='App'>
      <NewTodo />
      <Todos />
      <HackerRank />
    </div>
  );
}
