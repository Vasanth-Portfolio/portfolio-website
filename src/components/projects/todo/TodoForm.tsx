import { useState } from "react";

interface TodoFormProps {
  onAdd: (title: string) => Promise<void>;
  isAdding?: boolean;
}

export function TodoForm({ onAdd, isAdding }: TodoFormProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      await onAdd(title.trim());
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 disabled:bg-blue-300"
        >
          {isAdding ? 'Adding...' : 'Add'}
        </button>
      </div>
    </form>
  );
}