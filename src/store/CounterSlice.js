import { createSlice } from '@reduxjs/toolkit'

const localStorageCount = localStorage.getItem('count')
const initialState = {
    value: localStorageCount !== null ? Number(localStorageCount) : 0,
}

export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
            localStorage.setItem('count', state.value)
        },
        decrement: (state) => {
            state.value -= 1
            localStorage.setItem('count', state.value)
        },
        init: (state, action) => {
            state.value = action.payload
            localStorage.setItem('count', state.value)
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, init } = CounterSlice.actions

export default CounterSlice.reducer