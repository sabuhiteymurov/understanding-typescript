import { useRef } from 'react';

const NewTodo: React.FC<{ addTodo: (inputText: string) => void }> = ({
  addTodo,
}) => {
  const todoTextRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inputText = todoTextRef.current!.value;
    if (inputText?.trim()?.length === 0) return;
    addTodo(inputText);
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
