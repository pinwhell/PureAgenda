import { FilterType } from './FilterButtons';
import { useStatePersist } from './useStatePersist';
import { useTodos } from './TodosContext';
import FilterButtons from './FilterButtons';
import Todo from './todo';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useTodos();
  const [filterType, setFilterType] = useStatePersist<FilterType>(
    'TodoList.Filter',
    FilterType.All
  );

  const todoFilter = (todo: Todo) => {
    if (filterType == FilterType.Completed && todo.completed !== true)
      return null;

    if (filterType == FilterType.Pending && todo.completed !== false)
      return null;

    return todo;
  };

  return (
    <>
      {todos.length > 0 ? (
        <>
          <div className="responsive-form" style={{ marginTop: 25 }}>
            <button
              onClick={() => setTodos([])}
              style={{ marginRight: 5, backgroundColor: 'red' }}
            >
              Clear
            </button>
          </div>

          <FilterButtons
            filterType={filterType}
            setFilterType={setFilterType}
            enabledColor={'darkcyan'}
            disabledColor={'gray'}
          />
        </>
      ) : null}

      <div className="inversed-list responsive-form">
        {todos.filter(todoFilter).map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
}

export default TodoList;
