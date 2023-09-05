import React from 'react';
import TodoList from './TodoList';
import { TodosProvider } from './TodosContext';
import AddTodoForm from './AddTodoForm';

class App extends React.Component {
  render()
  {
    return <>
    <h1>Pure Agenda</h1>

    <TodosProvider>
      <AddTodoForm/>
      <TodoList/>
    </TodosProvider>
    
    </>
  }
}

export default App
