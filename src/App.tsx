import Basics from './Concepts/Basics';
import './Concepts/Classes';
import './Concepts/Interfaces';
import './Concepts/AdvancedConcepts';
import CodeWars from './Challenges/CodeWars';
import HackerRank from './Challenges/HackerRank';
import Generics from './Concepts/Generics';
import Todos from './Projects/simple-to-do/components/Todos';
import NewTodo from './Projects/simple-to-do/components/NewTodo';
import TodosContextProvider from './Projects/simple-to-do/store/todos-context';

export default function App() {
  Basics();
  CodeWars();
  Generics();

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
      <HackerRank />
    </TodosContextProvider>
  );
}
