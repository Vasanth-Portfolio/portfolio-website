import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Todo } from '../components/projects/todo/types';

const API_URL = import.meta.env.VITE_API_URL;

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
        query: () => '/api/todos',
        transformResponse: (response: { success: boolean; data: Todo[] }) => {
            if (import.meta.env.MODE === 'development') {            console.groupCollapsed('getTodos API Response');
            console.log('Data:', response.data);
            console.groupEnd();
          }
          return response.data;
        },
        providesTags: (result) => 
          result
            ? [...result.map(({ id }) => ({ type: 'Todo' as const, id })), 'Todo']
            : ['Todo'],
      }),
    addTodo: builder.mutation<Todo, { title: string }>({
      query: (body) => ({
        url: '/api/todos',
        method: 'POST',
        body,
      }),
      transformResponse: (response: { success: boolean; data: Todo }) => response.data,
      invalidatesTags: ['Todo'],
    }),
    updateTodo: builder.mutation<Todo, { id: number; completed: boolean }>({
      query: ({ id, ...body }) => ({
        url: `/api/todos/${id}`,
        method: 'PUT',
        body,
      }),
      transformResponse: (response: { success: boolean; data: Todo }) => response.data,
      invalidatesTags: (_, __, arg) => [{ type: 'Todo', id: arg.id }],
    }),
    deleteTodo: builder.mutation<void, number>({
      query: (id) => ({
        url: `/api/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_, __, id) => [{ type: 'Todo', id }],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApi;