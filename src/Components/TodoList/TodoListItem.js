import * as React from 'react';
import styled from "styled-components";
import {TodoListItemButton} from "./TodoListItemComponent/TodoListItemButton";
import {TodoListItemText} from "./TodoListItemComponent/TodoListItemText";
import {TodoListItemCheckbox} from "./TodoListItemComponent/TodoListItemCheckbox";


export const TodoListItem = ({todoData}) => {
    return (
        <StyledTodoListItemLi>
            <StyledItemComponentLiContainer>
                <TodoListItemCheckbox todoData={todoData}/>
                <TodoListItemText todoData={todoData}/>
            </StyledItemComponentLiContainer>
        </StyledTodoListItemLi>
    );
};

const StyledTodoListItemLi = styled.li`
  text-align: left;
  display: flex !important;
  font-size: .9375rem;
  padding: 0.4rem 0;
  border-bottom: 1px solid #f3f3f3;
  list-style: none;
`

const StyledItemComponentLiContainer = styled.div`
  display: flex;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  
`
