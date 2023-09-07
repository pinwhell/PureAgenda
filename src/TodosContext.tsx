import { ReactNode, createContext, useContext } from 'react';
import { useStatePersist } from './useStatePersist';
import Todo from './todo';

type TodosContextValue = ReturnType<typeof useStatePersist<Todo[]>>;

const TodosContext = createContext<TodosContextValue>({} as TodosContextValue);

export function TodosProvider({ children }: { children: ReactNode }) {
  const todosState = useStatePersist<Todo[]>('todos', []);

  return (
    <TodosContext.Provider value={todosState}>{children}</TodosContext.Provider>
  );
}

export const useTodos = () => useContext(TodosContext);
