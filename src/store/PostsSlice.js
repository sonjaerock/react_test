import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { callGetPosts } from "../Api/TestPostsApi";

const initialState = {
    response: [],
    status: 'idle',
    error: null
}
export const getPosts = createAsyncThunk('todoList/getTodoList',
    async () => {
        return await callGetPosts();
    });

// export const setTodoList = createAsyncThunk('todoList/setTodoList',
//     async (payload) => {
//         return await callSetTodoList(payload);
//     });
//
// export const deleteTodoList = createAsyncThunk('todoList/DeleteTodoList',
//     async (payload) => {
//         return await callDeleteTodoList(payload).then(() => { return payload.id });
//     });

export const PostsSlice = createSlice({
    name: 'Posts',
    initialState,
    reducers: {
        // getTodoList: async (state) => {
        //     state.value = await getTestTodoData();
        // }
    },
    extraReducers: (builder) => {
        builder
            // getTodoList
            .addCase(getPosts.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(getPosts.fulfilled, (state, {payload}) => {
                state.status = 'fulfilled';
                state.error = null;
                state.response = payload;
            })
            .addCase(getPosts.rejected, (state, {payload}) => {
                state.status = 'rejected';
                state.error = payload;
            })
            // // setTodoList
            // .addCase(setTodoList.pending, (state) => {
            //     state.status = 'pending';
            //     state.error = null;
            // })
            // .addCase(setTodoList.fulfilled, (state, {payload}) => {
            //     state.response.forEach((todoListItem) => {
            //         if(todoListItem.id === payload.id) {
            //             todoListItem.completed = payload.completed;
            //         }
            //     })
            //     state.status = 'fulfilled';
            //     state.error = null;
            //     // state.response = payload;
            // })
            // .addCase(setTodoList.rejected, (state, {payload}) => {
            //     state.status = 'rejected';
            //     state.error = payload;
            // })
            // // deleteTodoList
            // .addCase(deleteTodoList.pending, (state) => {
            //     state.status = 'pending';
            //     state.error = null;
            // })
            // .addCase(deleteTodoList.fulfilled, (state, {payload}) => {
            //     console.log(payload)
            //     state.response.forEach((todoListItem, idx) => {
            //         if(todoListItem.id === payload) {
            //             state.response.splice(idx, 1);
            //             return;
            //         }
            //     })
            //     state.status = 'fulfilled';
            //     state.error = null;
            //     // state.response = payload;
            // })
            // .addCase(deleteTodoList.rejected, (state, {payload}) => {
            //     state.status = 'rejected';
            //     state.error = payload;
            // })
    },
})

export default PostsSlice.reducer