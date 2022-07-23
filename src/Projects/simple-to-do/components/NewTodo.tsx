import { useRef, useContext } from 'react';

import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inputText = todoTextRef.current!.value;
    if (inputText?.trim()?.length === 0) return;
    todosCtx.addTodo(inputText);
    todoTextRef.current!.value = '';
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextRef} />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default NewTodo;
