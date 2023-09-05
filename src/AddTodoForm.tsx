import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo.tsx';
import './App.css';

const initialTodo: Todo = {
    id: 0,
    title: "",
    description: "",
    completed: false,
};

function AddTodoForm ({addTodo})
{
  const [todo, setTodo] = useState<Todo>(initialTodo);

  const setTitle = (title : string) =>
  {
    setTodo({...todo, title: title});
  };

  const setDescription = (desc: string) =>
  {
    setTodo({...todo, description: desc});
  };

  const onAddClick = (e) =>
  {
    e.preventDefault();

    if(todo.title.length === 0 || todo.description.length === 0)
      return;

    todo.id = uuidv4();

    addTodo(todo);
    setTodo(initialTodo);
  };

  return <div className="form-container responsive-form-padded">
  <h2>Add Todo</h2>
  <form>
    <div className="form-group">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        value={todo.title}
        placeholder="Enter a title"
      />
    </div>
    <div className="form-group">
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        onChange={(e) => setDescription(e.target.value)}
        value={todo.description}
        placeholder="Enter a description"
        rows="4"
      ></textarea>
    </div>
    <div style={{paddingTop:10}}>
      <button onClick={onAddClick}>Add</button>
    </div>
  </form>
</div>;
}

export default AddTodoForm;
