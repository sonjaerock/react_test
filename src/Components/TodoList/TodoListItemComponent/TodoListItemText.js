import * as React from 'react';
import styled from "styled-components";
import {TodoListItemButton} from "./TodoListItemButton";
import {useState, useEffect} from "react";

export const TodoListItemText = ({todoData}) => {
    const [tempTodoData, useTempTodoData] = useState(todoData);

    return (
        <StyledTodoListItemTextContainer>
            <StyledTodoListItemTextInput
                onChange={(e) => {useTempTodoData({
                    title: e.target.value
                })}}
                type="text"
                value={tempTodoData.title || ''}/>

            {/*삭제*/}
            <TodoListItemButton
                todoData={todoData}
                type={'delete'}
                title={'Delete'}>
            </TodoListItemButton>

            {/*수정*/}
            <TodoListItemButton
                tempTodoData = {tempTodoData}
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
  width: 420px;
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

