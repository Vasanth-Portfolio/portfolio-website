import { TrashIcon, CheckIcon } from "@heroicons/react/24/solid";
import { Todo } from "./types";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number, completed: boolean) => void; 
  onDelete: (id: number) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <li className="flex items-center justify-between p-4 bg-white rounded-lg shadow mb-2 hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-3">
        <button
          onClick={() => onToggle(todo.id,todo.completed)}
          className={`flex-shrink-0 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors ${
            todo.completed
              ? "bg-green-500 border-green-500"
              : "border-gray-300 hover:border-gray-400"
          }`}
          aria-label={todo.completed ? "Mark incomplete" : "Mark complete"}
        >
          {todo.completed && <CheckIcon className="h-3 w-3 text-white" />}
        </button>
        <span
          className={`flex-grow ${
            todo.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {todo.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-gray-400 hover:text-red-500 transition-colors"
        aria-label="Delete todo"
      >
        <TrashIcon className="h-5 w-5" />
      </button>
    </li>
  );
};
