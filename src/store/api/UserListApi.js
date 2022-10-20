import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const UserListApi = createApi({
    reducerPath: 'UserList',
    tagTypes: ['UserList'],
    baseQuery: fetchBaseQuery({
        baseUrl: `https://reqres.in/api`
    }),
    endpoints: (builder) => ({
        getUserList: builder.query({
            query: (page) => `/user?page=${page}`,
            providesTags: () => {
                return [{type: 'UserList'}]
            }
        }),
        putUserList: builder.mutation({
            query: ({id, data}) => ({
                url: `/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['UserList'],
        }),
        deleteUserList: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['UserList'],
        })
    })
})

export const UserListEndPoints = UserListApi.endpoints