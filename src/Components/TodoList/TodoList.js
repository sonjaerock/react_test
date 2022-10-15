// @flow
import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTodoList} from "../../store/TodoListSlice";
import {useEffect} from "react";
import {TodoListItem} from "./TodoListItem";

export const TodoList = ({props}) => {
    const todoList = useSelector((state) => state.TodoListReducer.response)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTodoList())
        console.log('mounted', todoList)
    }, []);

    return (
        <div>
            {
                todoList.map((todoItem, idx) => {
                    return <TodoListItem
                        key={idx}
                        todoData={todoItem}>
                    </TodoListItem>
                })
            }
        </div>
    );
};