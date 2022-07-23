import TodoContent from '../models/todoContent';
import Todo from './Todo';

const Todos: React.FC<{
  todos: TodoContent[];
  setTodos: React.Dispatch<React.SetStateAction<TodoContent[]>>;
}> = ({ todos, setTodos }) => {
  return (
    <ul className='todos'>
      {todos.map((item) => (
        <Todo key={item.id} {...item} setTodos={setTodos} listId={item.id} />
      ))}
    </ul>
  );
};

export default Todos;
