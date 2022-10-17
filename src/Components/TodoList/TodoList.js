// @flow
import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTodoList} from "../../store/TodoListSlice";
import {useEffect} from "react";
import {TodoListItem} from "./TodoListItem";
import styled from "styled-components";

export const TodoList = ({props}) => {
    const todoList = useSelector((state) => state.TodoListReducer.response)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTodoList())
        console.log('mounted', todoList)
    }, []);

    return (
        <StyledTodoListUl>
            {
                todoList.map((todoItem, idx) => {
                    return <TodoListItem
                        key={idx}
                        todoData={todoItem}>
                    </TodoListItem>
                })
            }
        </StyledTodoListUl>
    );
};

const StyledTodoListUl = styled.ul`
  flex-direction: column-reverse !important;
  padding: 0;
  text-align: left;
  list-style: none;
  margin-bottom: 0;
`