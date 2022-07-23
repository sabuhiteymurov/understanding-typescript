import Basics from './Concepts/Basics';
import './Concepts/Classes';
import './Concepts/Interfaces';
import './Concepts/AdvancedConcepts';
import CodeWars from './Challenges/CodeWars';
import HackerRank from './Challenges/HackerRank';
import Generics from './Concepts/Generics';
import Todos from './Projects/simple-to-do/components/Todos';
import NewTodo from './Projects/simple-to-do/components/NewTodo';
import TodoContent from './Projects/simple-to-do/models/todoContent';
import { useState } from 'react';

export default function App() {
  Basics();
  CodeWars();
  Generics();

  const [todos, setTodos] = useState<TodoContent[]>([]);

  const addTodo = (text: string): void => {
    // setTodos([...todos, new TodoContent(text, new Date().getTime())]);

    // Another way
    setTodos((preTodos) => {
      const newTodo = new TodoContent(text, new Date().getTime());
      return preTodos.concat(newTodo);
    });
  };

  return (
    <div className='App'>
      <NewTodo addTodo={addTodo} />
      <Todos todos={todos} setTodos={setTodos} />
      <HackerRank />
    </div>
  );
}
