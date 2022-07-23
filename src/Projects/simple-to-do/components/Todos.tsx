import TodoContent from '../models/todoContent';
import Todo from './Todo';

const Todos: React.FC<{
  todos: TodoContent[];
  handleRemoveClick: (listId: number) => void;
}> = ({ todos, handleRemoveClick }) => {
  return (
    <ul className='todos'>
      {todos.map((item) => (
        <Todo
          key={item.id}
          {...item}
          listId={item.id}
          handleRemoveClick={handleRemoveClick}
        />
      ))}
    </ul>
  );
};

export default Todos;
