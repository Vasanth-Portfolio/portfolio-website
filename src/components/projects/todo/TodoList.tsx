import { Todo } from "./types";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li 
          key={todo.id}
          className={`flex items-center justify-between p-3 border rounded-lg 
            bg-white dark:bg-ternary-dark
            border-gray-200 dark:border-gray-600`}
        >
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className="h-5 w-5 rounded text-blue-600 focus:ring-blue-500
                dark:text-blue-400 dark:focus:ring-blue-500"
              aria-label={`Mark ${todo.title} as ${todo.completed ? 'incomplete' : 'complete'}`}
            />
            <span className={`
              ${todo.completed ? 'line-through text-gray-400 dark:text-gray-500' : 
              'text-gray-800 dark:text-gray-200'}`}
            >
              {todo.title}
            </span>
          </div>
          <button
            onClick={() => onDelete(todo.id)}
            className="text-red-500 hover:text-red-700 
              dark:text-red-400 dark:hover:text-red-300
              disabled:text-red-300 dark:disabled:text-red-700"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}