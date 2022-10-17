import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './CounterSlice';
import TodoListReducer from './TodoListSlice';
import PostsReducer from "./PostsSlice";

// 1. Create a Redux Store
// 자동으로 Redux DevTools extension 설정
export const store = configureStore({
    reducer: {CounterReducer, TodoListReducer, PostsReducer},
});

