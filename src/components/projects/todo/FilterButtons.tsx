import type { TodoFilter } from './TodoView';

interface FilterButtonsProps {
  currentFilter: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
}

export const FilterButtons = ({
  currentFilter,
  onFilterChange,
}: FilterButtonsProps) => {
  const filters = [
    { label: 'All', value: 'all' as const },
    { label: 'Active', value: 'active' as const },
    { label: 'Completed', value: 'completed' as const },
  ];

  return (
    <div 
      className="flex justify-center space-x-2 my-4"
      role="group"
      aria-label="Filter todos"
    >
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => onFilterChange(f.value)}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            currentFilter === f.value
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
          } ${
            'cursor-pointer'
          }`}
          aria-pressed={currentFilter === f.value}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};