import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { 
  useGetExpensesQuery,
  useAddExpenseMutation,
  useDeleteExpenseMutation,
  useGetBalanceQuery
} from '../../../redux/expenseApi';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseListPage = () => {
  // RTK Query hooks
  const { data: transactionsData, isLoading, refetch } = useGetExpensesQuery();
  const { data: balanceData } = useGetBalanceQuery();
  const [addExpense] = useAddExpenseMutation();
  const [deleteExpense] = useDeleteExpenseMutation();

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

  const handleDelete = async (id: number) => {
    try {
      await deleteExpense(id).unwrap();
      refetch();
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

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
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Expense Tracker</h1>
      
      <div className="bg-blue-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-2">Current Balance</h2>
        <p className={`text-4xl font-bold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          ${balance.toFixed(2)}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Add Transaction</h2>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="description">
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={newTransaction.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="amount">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={newTransaction.amount || ''}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                step="0.01"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="type">
                Type
              </label>
              <select
                id="type"
                name="type"
                value={newTransaction.type}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="category">
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={newTransaction.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="date">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={newTransaction.date}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Add Transaction
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Transaction History</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {transactions.length === 0 ? (
              <p className="text-gray-500">No transactions yet.</p>
            ) : (
              <ul className="divide-y">
                {transactions.map(transaction => (
                  <li key={transaction.id} className="py-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">{transaction.description}</p>
                        <p className="text-sm text-gray-500">
                          {transaction.category} • {new Date(transaction.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className={`font-bold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                          {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                        </p>
                        <button
                          onClick={() => handleDelete(transaction.id)}
                          className="ml-4 text-red-500 hover:text-red-700"
                        >
                          Delete
                        </button>
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
          <h2 className="text-2xl font-semibold mb-4">Expense Breakdown</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
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