import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {   // plural hai
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        removeTodo: (state, action) => {
            return state.filter((todo, index) => index !== action.payload);
        },
        editTodo: (state, action) => {
            const { index, newText } = action.payload;
            state[index] = newText;
        },
    },
});


export const {addTodo, removeTodo, editTodo } = todoSlice.actions
export default todoSlice.reducer