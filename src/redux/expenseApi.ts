import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Expense } from "../components/projects/expenseTracker/types";


const API_URL = import.meta.env.VITE_API_URL;

export const expenseApi = createApi({
  reducerPath: "expenseApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Expense"],
  endpoints: (builder) => ({
    // Get all expenses
    getExpenses: builder.query<Expense[], void>({
      query: () => "/api/expense",
      transformResponse: (response: { success: boolean; data: Expense[] }) => {
        if (import.meta.env.MODE === "development") {
          console.groupCollapsed("getExpenses API Response");
          console.log("Data:", response.data);
          console.groupEnd();
        }
        return response.data;
      },
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: "Expense" as const, id })), "Expense"]
          : ["Expense"],
    }),

    getExpense: builder.query<Expense, number>({
      query: (id) => `/api/expense/${id}`,
      transformResponse: (response: { success: boolean; data: Expense }) => response.data,
      providesTags: (_, __, id) => [{ type: "Expense", id }],
    }),

    addExpense: builder.mutation<Expense, Omit<Expense, 'id'>>({
      query: (body) => ({
        url: "/api/expense",
        method: "POST",
        body,
      }),
      transformResponse: (response: { success: boolean; data: Expense }) => response.data,
      invalidatesTags: ["Expense"],
    }),

    updateExpense: builder.mutation<Expense, Partial<Expense> & Pick<Expense, 'id'>>({
      query: ({ id, ...body }) => ({
        url: `/api/expense/${id}`,
        method: "PUT",
        body,
      }),
      transformResponse: (response: { success: boolean; data: Expense }) => response.data,
      invalidatesTags: (_, __, { id }) => [{ type: "Expense", id }],
    }),

    deleteExpense: builder.mutation<void, number>({
      query: (id) => ({
        url: `/api/expense/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_, __, id) => [{ type: "Expense", id }],
    }),

    getBalance: builder.query<number, void>({
      query: () => "/api/expense/balance",
      transformResponse: (response: { success: boolean; balance: number }) => response.balance,
    }),
  }),
});

export const {
  useGetExpensesQuery,
  useGetExpenseQuery,
  useAddExpenseMutation,
  useUpdateExpenseMutation,
  useDeleteExpenseMutation,
  useGetBalanceQuery,
} = expenseApi;