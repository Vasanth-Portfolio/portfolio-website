import { Todo } from './types';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void; 
  onDelete: (id: string) => void; 
}

export const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <div 
        className="text-center py-8 text-gray-500 dark:text-gray-400"
        aria-live="polite"
      >
        <p className="text-lg">No todos yet!</p>
        <p className="text-sm">Add your first todo above</p>
      </div>
    );
  }

  return (
    <ul className="space-y-2" aria-label="Todo items">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id} 
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};