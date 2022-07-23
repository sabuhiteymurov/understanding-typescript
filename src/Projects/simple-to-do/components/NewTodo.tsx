import React, { useState } from 'react';
import Todo from './Todo';

const NewTodo = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default NewTodo;
