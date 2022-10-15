import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTodoList} from "../store/TodoListSlice";

const ApiCallComponent = () => {
    const todoList = useSelector((state) => state.TodoListReducer.response)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('mounted')
        dispatch(getTodoList())
    }, []);

    return (
        <div>
            todo list
            {todoList.map((todo, idx) => {
                return (
                    <div key={idx}>
                        <span>title : { todo.title }</span> |
                        <span>completed : { todo.completed ? 'done' : 'none' }</span>
                    </div>
                )
            })}
        </div>
    )
}

export default ApiCallComponent