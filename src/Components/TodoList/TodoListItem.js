import * as React from 'react';
import styled from "styled-components";
import {TodoListItemText} from "./TodoListItemComponent/TodoListItemText";
import {TodoListItemCheckbox} from "./TodoListItemComponent/TodoListItemCheckbox";

export const TodoListItem = ({idx}) => {

    return (
        <StyledTodoListItemLi>
            <StyledItemComponentLiContainer>
                <TodoListItemCheckbox idx={idx}/>
                <TodoListItemText idx={idx}/>
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
