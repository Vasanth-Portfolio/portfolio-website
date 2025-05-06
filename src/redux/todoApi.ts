import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Todo } from "../components/projects/todo/types";
import { RootState } from "../redux/store";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:10000';

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "/api/todos",
      transformResponse: (response: { success: boolean; data: Todo[] }) => response.data,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: "Todo" as const, id })), "Todo"]
          : ["Todo"],
    }),

    addTodo: builder.mutation<Todo, { title: string }>({
      query: (body) => ({
        url: "/api/todos",
        method: "POST",
        body,
      }),
      transformResponse: (response: { success: boolean; data: Todo }) => response.data,
      invalidatesTags: ["Todo"],
    }),

    updateTodo: builder.mutation<Todo, { id: number; completed: boolean }>({
      query: ({ id, ...body }) => ({
        url: `/api/todos/${id}`,
        method: "PUT",
        body,
      }),
      transformResponse: (response: { success: boolean; data: Todo }) => response.data,
      invalidatesTags: (_, __, arg) => [{ type: "Todo", id: arg.id }],
    }),

    deleteTodo: builder.mutation<void, number>({
      query: (id) => ({
        url: `/api/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_, __, id) => [{ type: "Todo", id }],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApi;