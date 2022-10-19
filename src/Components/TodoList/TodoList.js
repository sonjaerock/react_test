// @flow
import * as React from 'react';
import {TodoListItem} from "./TodoListItem";
import styled from "styled-components";
import { useGetTodoListQuery } from '../../store/api/TodoApi';

export const TodoList = ({props}) => {
    const {data: todoList} = useGetTodoListQuery('');
    
    return (
        <StyledTodoListUl>
            {
                todoList?.map(( _ , idx) => {
                    return <TodoListItem
                        key={idx}
                        idx={idx}>
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