import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './CounterSlice';
import PostsReducer from "./PostsSlice";
import { TodoApi } from './api/TodoApi';
import { PostApi } from './api/PostApi';
import {UserListApi} from "./api/UserListApi";

// 1. Create a Redux Store
// 자동으로 Redux DevTools extension 설정
export const store = configureStore({
    reducer: {
        CounterReducer, 
        PostsReducer,
        [TodoApi.reducerPath]: TodoApi.reducer,
        [PostApi.reducerPath]: PostApi.reducer,
        [UserListApi.reducerPath]: UserListApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        TodoApi.middleware, PostApi.middleware, UserListApi.middleware),
});

