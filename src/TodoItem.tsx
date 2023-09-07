import './TodoItem.css';
import { useTodos } from './TodosContext';
import Todo from './todo';

function TodoItem({ todo }: { todo: Todo }) {
  const [, setTodos] = useTodos();

  const todoStatus = todo.completed ? 'Completed' : 'Pending';
  const todoStatusColor = todo.completed ? 'cyan' : 'gray';

  const onCompleted = (todo: Todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === todo.id ? { ...prevTodo, completed: true } : prevTodo
      )
    );
  };

  const onDelete = (todo: Todo) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => prevTodo.id !== todo.id)
    );
  };

  return (
    <div className="todo-item responsive-form-padded">
      <p className="todo-title">{todo.title}</p>
      <p className="todo-description">{todo.description}</p>
      <p style={{ color: todoStatusColor }} className="todo-status">
        {todoStatus}
      </p>
      {!todo.completed && (
        <button style={{ marginRight: 10 }} onClick={() => onCompleted(todo)}>
          Complete
        </button>
      )}
      <button onClick={() => onDelete(todo)}>Delete</button>
    </div>
  );
}

export default TodoItem;
