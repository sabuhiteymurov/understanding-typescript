import TodoContent from '../models/todoContent';

const Todo: React.FC<{
  text: string;
  setTodos: React.Dispatch<React.SetStateAction<TodoContent[]>>;
  listId: number;
}> = ({ text, setTodos, listId }) => {
  const handleClick = () => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== listId;
      });
    });
  };

  return (
    <>
      <li className='item' onClick={handleClick}>
        {text}
      </li>
    </>
  );
};

export default Todo;
