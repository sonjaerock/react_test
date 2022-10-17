import * as React from 'react';
import styled from "styled-components";
import {TodoListItemButton} from "./TodoListItemButton";

export const TodoListItemText = ({todoData}) => {
    return (
        <StyledTodoListItemTextContainer>
            <StyledTodoListItemTextInput
                type="text"
                value={todoData.title}/>
            <TodoListItemButton
                todoData={todoData}
                type={'delete'}
                title={'Delete'}>
            </TodoListItemButton>
            <TodoListItemButton
                todoData={todoData}
                type={'put'}
                title={'Adjust'}>
            </TodoListItemButton>
        </StyledTodoListItemTextContainer>
    );
};
const StyledTodoListItemTextContainer = styled.div`
  width: 100%;
`

const StyledTodoListItemTextInput = styled.input`
  width: 440px;
  border: none;

  &:focus {
    outline: none;
    border-bottom: 1px #61768B solid;
    font-weight: 600;
  }
`

const StyledTodoListItemAdjustButton = styled.button`
  float: right;
  height: 20px;
  margin-left: 10px;
  color: white;
  border: 1px #61768B solid;
  border-radius: 1px;
  background: #61768B;
  
`

