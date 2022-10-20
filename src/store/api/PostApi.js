import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const PostApi = createApi({
    reducerPath: 'post',
    tagTypes: ['post'],
    baseQuery: fetchBaseQuery({
        baseUrl: `https://jsonplaceholder.typicode.com/posts/`
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '',
            providesTags: [{type: 'todo'}]
        })
    })
})

export const PostApiEndPoints = PostApi.endpoints;
