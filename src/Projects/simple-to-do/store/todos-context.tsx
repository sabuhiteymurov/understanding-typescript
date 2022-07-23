import React, { useState } from 'react';
import TodoContent from '../models/todoContent';

type TodosContextObj = {
  items: TodoContent[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
};

export const TodosContext = React.createContext<{
  items: TodoContent[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
}>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: number) => {},
});

// Children property on React component not exist solution:
type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

const TodosContextProvider: React.FC = (props: Props) => {
  const [todos, setTodos] = useState<TodoContent[]>([]);

  const addTodo = (text: string): void => {
    // setTodos([...todos, new TodoContent(text, new Date().getTime())]);

    // Another way
    setTodos((preTodos) => {
      const newTodo = new TodoContent(text, new Date().getTime());
      return preTodos.concat(newTodo);
    });
  };

  const handleRemoveClick = (listId: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== listId;
      });
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodo,
    removeTodo: handleRemoveClick,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
