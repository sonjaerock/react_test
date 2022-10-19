import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './CounterSlice';
import PostsReducer from "./PostsSlice";
import { todoApi } from './api/TodoApi';

// 1. Create a Redux Store
// 자동으로 Redux DevTools extension 설정
export const store = configureStore({
    reducer: {
        CounterReducer, 
        PostsReducer,
        [todoApi.reducerPath]: todoApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApi.middleware),
});

