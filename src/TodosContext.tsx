import React, { createContext, useContext } from 'react';
import { useStatePersist } from './useStatePersist';
import Todo from './Todo';

const TodosContext = createContext([]);

export function TodosProvider({children})
{
    const todosState = useStatePersist<Todo[]>('todos', []);

    return (
    <TodosContext.Provider value={todosState}>
        {children}
    </TodosContext.Provider>    
    );
}

export const useTodos = () => useContext(TodosContext);