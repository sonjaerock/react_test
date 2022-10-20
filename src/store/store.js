import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './CounterSlice';
import PostsReducer from "./PostsSlice";
import { TodoApi } from './api/TodoApi';
import { PostApi } from './api/PostApi';

// 1. Create a Redux Store
// 자동으로 Redux DevTools extension 설정
export const store = configureStore({
    reducer: {
        CounterReducer, 
        PostsReducer,
        [TodoApi.reducerPath]: TodoApi.reducer,
        [PostApi.reducerPath]: PostApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        TodoApi.middleware, PostApi.middleware),
});

