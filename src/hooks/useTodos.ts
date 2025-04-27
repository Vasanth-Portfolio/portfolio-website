import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Todo } from '../components/projects/todo/types';

const API_URL = import.meta.env.VITE_API_URL + '/api/todos';

type TodoError = {
  message: string;
  status?: number;
};

type ApiResponse<T> = {
  success: boolean;
  data: T;
  count?: number;
  error?: string;
};

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<TodoError | null>(null);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<ApiResponse<Todo[]>>(API_URL);
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch todos');
      }

      setTodos(data.data || []);
      setError(null);
    } catch (err) {
      handleApiError(err as AxiosError, 'Failed to fetch todos');
    } finally {
      setLoading(false);
    }
  };

  const handleApiError = (error: AxiosError, fallbackMessage: string) => {
    const errorData = error.response?.data as ApiResponse<never>;
    setError({
      message: errorData?.error || fallbackMessage,
      status: error.response?.status
    });
    console.error('API Error:', error);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (text: string) => {
    try {
      const { data } = await axios.post<ApiResponse<Todo>>(API_URL, { 
        text: text.trim() 
      });

      if (!data.success) {
        throw new Error(data.error || 'Failed to add todo');
      }

      setTodos(prev => [data.data, ...prev]);
    } catch (err) {
      handleApiError(err as AxiosError, 'Failed to add todo');
    }
  };

  const toggleTodo = async (id: string) => {
    if (!id) {
      setError({
        message: 'Invalid todo ID',
        status: 400
      });
      return;
    }

    try {
      const todo = todos.find(t => t._id === id);
      if (!todo) {
        throw new Error('Todo not found');
      }

      const { data } = await axios.put<ApiResponse<Todo>>(
        `${API_URL}/${id}`,
        { completed: !todo.completed }
      );

      if (!data.success) {
        throw new Error(data.error || 'Failed to update todo');
      }

      setTodos(prev => prev.map(t => t._id === id ? data.data : t));
    } catch (err) {
      handleApiError(err as AxiosError, 'Failed to update todo');
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      if (!id) {
        throw new Error('Invalid todo ID');
      }
  
      await axios.delete(`${API_URL}/${id}`); // <- no need to read data
  
      // If no error, we assume delete was successful
      setTodos(prev => prev.filter(todo => todo._id !== id));
    } catch (err) {
      handleApiError(err as AxiosError, 'Failed to delete todo');
    }
  };
  

  return { 
    todos, 
    loading, 
    error,
    actions: {
      addTodo,
      toggleTodo,
      deleteTodo,
      refetch: fetchTodos
    }
  };
};