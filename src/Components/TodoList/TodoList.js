// @flow
import * as React from 'react';
import {TodoListItem} from "./TodoListItem";
import styled, {keyframes} from "styled-components";
import { TodoApiEndPoints } from '../../store/api/TodoApi';
import {useState} from "react";

export const TodoList = () => {
    const {data: todoList, isFetching, isLoading, isError} = TodoApiEndPoints.getTodoList.useQuery('',{
        pollingInterval: 3000,
        refetchOnMountOrArgChange: true,
        skip: false,
    });

    // 초기에만 나옴
    if(isLoading) return (<div>loading...</div>)
    // reFetching시 나옴
    if(isFetching) return (<div>fetching...</div>)
    // 에러인 경우
    if(isError) return (<div>error...{isError}</div>)

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
const fadeIn = keyframes`
  0% { opacity: 0 }
`
const StyledTodoListUl = styled.ul`
  flex-direction: column-reverse !important;
  padding: 0;
  text-align: left;
  list-style: none;
  margin-bottom: 0;
  animation: ${fadeIn} 1s;
`