import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { 
  useGetExpensesQuery,
  useAddExpenseMutation,
//   useDeleteExpenseMutation,
  useGetBalanceQuery
} from '../../../redux/expenseApi';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseListPage = () => {
  // RTK Query hooks
  const { data: transactionsData, isLoading, refetch } = useGetExpensesQuery();
  const { data: balanceData } = useGetBalanceQuery();
  const [addExpense] = useAddExpenseMutation();
//   const [deleteExpense] = useDeleteExpenseMutation();

  const transactions = transactionsData || [];
  const balance = balanceData || 0;

  const [newTransaction, setNewTransaction] = useState({
    description: '',
    amount: 0,
    type: 'expense' as const,
    date: new Date().toISOString().split('T')[0],
    category: 'Other'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTransaction(prev => ({
      ...prev,
      [name]: name === 'amount' ? parseFloat(value) || 0 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addExpense(newTransaction).unwrap();
      setNewTransaction({
        description: '',
        amount: 0,
        type: 'expense',
        date: new Date().toISOString().split('T')[0],
        category: 'Other'
      });
      refetch();
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

//   const handleDelete = async (id: number) => {
//     try {
//       await deleteExpense(id).unwrap();
//       refetch();
//     } catch (error) {
//       console.error('Error deleting transaction:', error);
//     }
//   };

  const getCategoryData = () => {
    const categories = Array.from(new Set(transactions.map(t => t.category)));
    const data = categories.map(category => {
      const total = transactions
        .filter(t => t.category === category)
        .reduce((sum, t) => sum + t.amount, 0);
      return total;
    });

    return {
      labels: categories,
      datasets: [
        {
          label: 'Expenses by Category',
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
          ],
          borderWidth: 1,
        },
      ],
    };
  };

  if (isLoading) {
    return (
      <div className="text-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto"></div>
        <p className="font-general-regular text-lg text-primary-dark dark:text-primary-light mt-4">
          Loading expense data...
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-general-regular text-3xl font-bold text-center text-secondary-dark dark:text-secondary-light mb-8">
        Expense Tracker
      </h1>
      
      <div className="bg-indigo-100 dark:bg-indigo-900 p-6 rounded-lg shadow-md mb-8">
        <h2 className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
          Current Balance
        </h2>
        <p className={`font-general-regular text-4xl font-bold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          ${balance.toFixed(2)}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-4">
            Add Transaction
          </h2>
          <form onSubmit={handleSubmit} className="bg-white dark:bg-ternary-dark p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="font-general-regular block text-primary-dark dark:text-ternary-light mb-2" htmlFor="description">
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={newTransaction.description}
                onChange={handleInputChange}
                className="font-general-regular w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                required
              />
            </div>

            <div className="mb-4">
              <label className="font-general-regular block text-primary-dark dark:text-ternary-light mb-2" htmlFor="amount">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={newTransaction.amount || ''}
                onChange={handleInputChange}
                className="font-general-regular w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                step="0.01"
                required
              />
            </div>

            <div className="mb-4">
              <label className="font-general-regular block text-primary-dark dark:text-ternary-light mb-2" htmlFor="type">
                Type
              </label>
              <select
                id="type"
                name="type"
                value={newTransaction.type}
                onChange={handleInputChange}
                className="font-general-regular w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="font-general-regular block text-primary-dark dark:text-ternary-light mb-2" htmlFor="category">
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={newTransaction.category}
                onChange={handleInputChange}
                className="font-general-regular w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                required
              />
            </div>

            <div className="mb-4">
              <label className="font-general-regular block text-primary-dark dark:text-ternary-light mb-2" htmlFor="date">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={newTransaction.date}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                className="font-general-regular w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              />
            </div>

            <button
              type="submit"
              className="font-general-regular w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Add Transaction
            </button>
          </form>
        </div>

        <div>
          <h2 className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-4">
            Transaction History
          </h2>
          <div className="bg-white dark:bg-ternary-dark p-6 rounded-lg shadow-md">
            {transactions.length === 0 ? (
              <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                No transactions yet.
              </p>
            ) : (
              <ul className="divide-y divide-gray-200 dark:divide-gray-600">
                {transactions.map(transaction => (
                  <li key={transaction.id} className="py-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-general-regular font-semibold text-primary-dark dark:text-primary-light">
                          {transaction.description}
                        </p>
                        <p className="font-general-regular text-sm text-ternary-dark dark:text-ternary-light">
                          {transaction.category} • {new Date(transaction.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className={`font-general-regular font-bold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                          {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                        </p>
                    
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {transactions.length > 0 && (
        <div className="mt-8">
          <h2 className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-4">
            Expense Breakdown
          </h2>
          <div className="bg-white dark:bg-ternary-dark p-6 rounded-lg shadow-md">
            <div className="h-64">
              <Pie data={getCategoryData()} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseListPage;