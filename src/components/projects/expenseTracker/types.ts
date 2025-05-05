export interface Expense {
    id: number;
    description: string;
    amount: number;
    type: 'income' | 'expense';
    date: string;
    category: string;
  }
  
  export interface ExpenseResponse {
    success: boolean;
    data: Expense | Expense[];
    balance?: number;
  }