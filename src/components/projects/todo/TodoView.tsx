import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTodos } from '../../../hooks/useTodos';
import { FilterButtons } from './FilterButtons';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import RunningLoader from '../../reusable/LoadingScreen';

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
    if (todos.length > 0 && !hasInitialData) {
      setHasInitialData(true);
    }
  }, [todos.length, hasInitialData]);

  if (error) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-md mx-auto p-4"
      >
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Error! </strong>
          <span className="block sm:inline">{error.message}</span>
          <button
            onClick={() => {
              actions.clearError?.();
              actions.refetch();
            }}
            className="absolute top-1 right-1 px-2 py-1 text-red-700 hover:text-red-900"
          >
            Retry
          </button>
        </div>
      </motion.div>
    );
  }
  if ( (loading && !hasInitialData)) {
    return (
      <div className="flex items-center justify-center">
        <RunningLoader />
      </div>
    );
  }
  

  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto p-4"
    >
      <h1 className="font-general-regular text-3xl font-bold text-center text-secondary-dark dark:text-secondary-light mb-8">
        Todo App
      </h1>
      
      <TodoForm 
        onAdd={actions.addTodo} 
        isAdding={loading && !hasInitialData}
      />
      
      <FilterButtons 
        currentFilter={filter} 
        onFilterChange={setFilter} 
      />
      
      <div className={`transition-opacity ${loading ? 'opacity-50' : 'opacity-100'}`}>
        {todos.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {hasInitialData ? 'No todos match your filter' : 'Your todo list is empty'}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {hasInitialData ? 'Try a different filter' : 'Add your first task above'}
            </p>
          </motion.div>
        ) : (
          <>
            <AnimatePresence>
              <TodoList 
                todos={filteredTodos} 
                onToggle={actions.toggleTodo} 
                onDelete={actions.deleteTodo} 
              />
            </AnimatePresence>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-gray-500 dark:text-gray-400 mt-4"
            >
              {remainingCount} {remainingCount === 1 ? 'item' : 'items'} left
              {filter !== 'all' && (
                <span className="ml-2">
                  (filtered from {todos.length} total)
                </span>
              )}
            </motion.div>
          </>
        )}
      </div>
    </motion.main>
  );
}