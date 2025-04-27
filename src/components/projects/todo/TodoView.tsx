import { useState, useMemo, useEffect } from 'react';
import { useTodos } from '../../../hooks/useTodos';
import { FilterButtons } from './FilterButtons';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

export type TodoFilter = 'all' | 'active' | 'completed';

export default function TodoView() {
  const { todos, loading, error, actions } = useTodos();
  const [filter, setFilter] = useState<TodoFilter>('all');
  const [hasInitialData, setHasInitialData] = useState(false);

  const filteredTodos = useMemo(() => {
    return todos.filter(todo => {
      if (filter === 'active') return !todo.completed;
      if (filter === 'completed') return todo.completed;
      return true;
    });
  }, [todos, filter]);

  const remainingCount = useMemo(() => (
    todos.filter(t => !t.completed).length
  ), [todos]);

  useEffect(() => {
    if (todos.length > 0) {
      setHasInitialData(true);
    }
  }, [todos.length]);

  if (loading && !hasInitialData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error: {error.message}
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>
      
      <TodoForm onAdd={actions.addTodo} />
      
      <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
      
      {/* Improved empty state */}
      {!loading && todos.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">Your todo list is empty</p>
          <p className="text-sm text-gray-500">Add your first task above</p>
        </div>
      ) : (
        <>
          <TodoList 
            todos={filteredTodos} 
            onToggle={actions.toggleTodo} 
            onDelete={actions.deleteTodo} 
          />
          <div className="text-sm text-gray-500 mt-4">
            {remainingCount} {remainingCount === 1 ? 'item' : 'items'} left
          </div>
        </>
      )}
    </main>
  );
}