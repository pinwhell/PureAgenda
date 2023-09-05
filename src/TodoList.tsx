import './App.css';
import { FilterType } from './FilterButtons';
import { useStatePersist } from './useStatePersist';
import FilterButtons from './FilterButtons';
import Todo from './Todo';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

function TodoList() {

    const [todos, setTodos] = useStatePersist<Todo[]>("TodoList.Todos", []);
    const [filterType, setFilterType] = useStatePersist<FilterType>("TodoList.Filter", FilterType.All);

    const addTodo = (newTodo: Todo) => {
        setTodos((prevTodos: Todo[]) => [...prevTodos, newTodo]);
    };

    const onCompleted = (todo: Todo) =>
    {
        setTodos((prevTodos: Todo[]) =>
            prevTodos.map((prevTodo: Todo) =>
                prevTodo.id === todo.id ? { ...prevTodo, completed: true } : prevTodo
            )
        );
    };

    const onDelete = (todo: Todo) =>
    {
    setTodos((prevTodos: Todo[]) => prevTodos.filter((prevTodo: Todo) => prevTodo.id !== todo.id))
    };

    const todoFilter = (todo: Todo) =>
    {
        if(filterType == FilterType.Completed && todo.completed !== true)
        return null;

        if(filterType == FilterType.Pending && todo.completed !== false)
        return null;

        return todo;
    };

    return (
    <>
        <AddTodoForm  addTodo={addTodo}/>
        {
            todos.length > 0 ?
            <>
                <div className="responsive-form" style={{marginTop:25}}>
                    <button onClick={() => setTodos([])} style={{ marginRight: 5, backgroundColor:'red' }}>Clear</button>
                </div>

                <FilterButtons filterType={filterType} setFilterType={setFilterType}  enabledColor={"darkcyan"} disabledColor={"gray"}/>
            </> 
            : null
        }
        
        <div className="inversed-list responsive-form">
            {
                todos
                .filter(todoFilter)
                .map((todo: Todo) => <TodoItem key={todo.id} todo={todo} onCompleted={onCompleted} onDelete={onDelete}/>)
            }
        </div>
    </>
    )
}

export default TodoList;