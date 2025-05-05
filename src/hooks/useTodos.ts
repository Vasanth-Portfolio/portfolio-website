import { useState } from 'react';
import {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from '../redux/todoApi';
import type { Todo } from '../components/projects/todo/types';

type TodoError = {
  message: string;
  status?: number;
  code?: string;
};

type TodoActions = {
  addTodo: (title: string) => Promise<void>;
  toggleTodo: (id: number) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
  refetch: () => void;
  clearError: () => void; 
};

export const useTodos = (): {
  todos: Todo[];
  loading: boolean;
  error: TodoError | null;
  actions: TodoActions;
} => {
  const [localError, setLocalError] = useState<TodoError | null>(null);
  
  // RTK Query hooks
  const {
    data: todos = [],
    isLoading,
    isFetching,
    refetch,
    error: fetchError,
  } = useGetTodosQuery();
  
  const [addTodoMutation] = useAddTodoMutation();
  const [updateTodoMutation] = useUpdateTodoMutation();
  const [deleteTodoMutation] = useDeleteTodoMutation();

  const handleError = (error: unknown): TodoError => {
    const defaultError: TodoError = {
      message: 'An unknown error occurred',
      status: 500,
    };

    if (typeof error !== 'object' || error === null) {
      return defaultError;
    }

    if ('status' in error) {
      const rtkError = error as {
        status: number;
        data?: { error?: string; message?: string; code?: string };
      };

      return {
        message: rtkError.data?.error || rtkError.data?.message || defaultError.message,
        status: rtkError.status,
        code: rtkError.data?.code,
      };
    }

    if (error instanceof Error) {
      return {
        ...defaultError,
        message: error.message,
      };
    }

    return defaultError;
  };

  const addTodo = async (title: string): Promise<void> => {
    try {
      if (!title.trim()) {
        throw new Error('Todo title cannot be empty');
      }
      await addTodoMutation({ title: title.trim() }).unwrap();
      setLocalError(null);
    } catch (error) {
      setLocalError(handleError(error));
    }
  };

  const toggleTodo = async (id: number): Promise<void> => {
    try {
      const todo = todos.find(t => t.id === id);
      if (!todo) {
        throw new Error('Todo not found');
      }
      await updateTodoMutation({ 
        id, 
        completed: !todo.completed 
      }).unwrap();
      setLocalError(null);
    } catch (error) {
      setLocalError(handleError(error));
    }
  };

  const deleteTodo = async (id: number): Promise<void> => {
    try {
      await deleteTodoMutation(id).unwrap();
      setLocalError(null); 
    } catch (error) {
      setLocalError(handleError(error));
    }
  };

  const clearError = () => setLocalError(null);

  const error = fetchError ? handleError(fetchError) : localError;

  return {
    todos,
    loading: isLoading || isFetching,
    error,
    actions: {
      addTodo,
      toggleTodo,
      deleteTodo,
      refetch,
      clearError, 
    },
  };
};