import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { callGetTodoList, callSetTodoList } from "../Api/TestApi";

const initialState = {
    response: [],
    status: 'idle',
    error: null
}
export const getTodoList = createAsyncThunk('todoList/getTodoList',
    async () => {
        return await callGetTodoList();
    });

export const setTodoList = createAsyncThunk('todoList/setTodoList',
    async (payload) => {
        let response = await callSetTodoList(payload);
        return response
    });

export const TodoListSlice = createSlice({
    name: 'TodoList',
    initialState,
    reducers: {
        // getTodoList: async (state) => {
        //     state.value = await getTestTodoData();
        // }
    },
    extraReducers: (builder) => {
        builder
            // getTodoList
            .addCase(getTodoList.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(getTodoList.fulfilled, (state, {payload}) => {
                state.status = 'fulfilled';
                state.error = null;
                state.response = payload;
            })
            .addCase(getTodoList.rejected, (state, {payload}) => {
                state.status = 'rejected';
                state.error = payload;
            })
            // setTodoList
            .addCase(setTodoList.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(setTodoList.fulfilled, (state, {payload}) => {
                state.response.forEach((todoListItem) => {
                    if(todoListItem.id === payload.id) {
                        todoListItem.completed = payload.completed;
                    }
                })
                state.status = 'fulfilled';
                state.error = null;
                // state.response = payload;
            })
            .addCase(setTodoList.rejected, (state, {payload}) => {
                state.status = 'rejected';
                state.error = payload;
            })
    },
})

export default TodoListSlice.reducer