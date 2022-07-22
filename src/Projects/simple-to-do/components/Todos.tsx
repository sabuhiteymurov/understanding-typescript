import TodoContent from '../models/todoContent';
import Todo from './Todo';

const Todos: React.FC = () => {
  const todos = [
    new TodoContent('Learn React', new Date().getTime()),
    new TodoContent('Learn TypeScript', new Date().getTime()),
  ];
  return (
    <ul>
      {todos.map((item) => (
        <Todo key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default Todos;
