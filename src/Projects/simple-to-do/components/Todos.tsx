import Todo from './Todo';
import { TodosContext } from '../store/todos-context';
import { useContext } from 'react';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className='todos'>
      {todosCtx.items.map((item) => (
        <Todo
          key={item.id}
          text={item.text}
          listId={item.id}
          handleRemoveClick={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
