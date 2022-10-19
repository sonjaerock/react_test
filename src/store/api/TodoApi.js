import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
    reducerPath: 'todo',
    // 초기화용 태그
    tagTypes: ['todo'],
    baseQuery: fetchBaseQuery({
        baseUrl: `https://jsonplaceholder.typicode.com/todos`,
        prepareHeaders: (header) => {
            header.set("Content-Type", "application/json");
            console.log(header.values())
            return header;
        }
    }),
    endpoints: (builder) => ({
        getTodoList: builder.query({
            query: () => `/`,
            providesTags: (result, error, id) => {
                return [{
                    type: 'todo'
                }]
            },
        }),
        putTodo: builder.mutation({
            query: ({id, data}) => ({
                url: `/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['todos'],
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['todos'],
        }),
    }),
});

export const {useGetTodoListQuery, usePutTodoMutation, useDeleteTodoMutation} = todoApi;
