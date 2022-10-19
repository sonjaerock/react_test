import * as React from 'react';
import {useState} from "react";
import styled, { keyframes, css } from "styled-components";
import { usePutTodoMutation} from '../../../store/api/TodoApi';
import todoApi from '../../../store/api/TodoApi';

export const TodoListItemCheckbox = ({idx}) => {
    const [putTodo, { isLoading: isPending }] = usePutTodoMutation()
    const {data: todoList} = todoApi.endpoints.getTodoList.useQueryState('');
    const todoData = todoList[idx]
    const [checked, useChecked] = useState(todoData.completed);
    
    return (
        <StyledTodoListItemLabel
            disabled={isPending}
            isPending={isPending}
            checked={checked}
            htmlFor={"todolist__item__checkbox-" + todoData.id}
        >
            <StyledTodoListItemInput
                type="checkbox"
                id={"todolist__item__checkbox-" + todoData.id}
                name={"todolist__item__checkbox-" + todoData.id}
                checked={checked}
                onChange={async (e) => {
                    useChecked(!checked)
                    e.preventDefault();
                    e.stopPropagation();
                    putTodo({id: todoData.id, data: {completed: !todoData.completed}})
                }
                }/>
        </StyledTodoListItemLabel>
    );
};
const spin = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`


const StyledTodoListItemLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  width: fit-content;
  font-size: 12px;
  color: #999999;
  font-weight: 400;
  text-align: left;
  cursor: pointer;

  &::before {
    width: 10px;
    height: 10px;
    border: 2px solid #61768B;
    content: ' ';
    
    margin-right: 10px;
    cursor: pointer;
  }
  
  &::after {
    margin-left: 1px;
    display: ${(props) => {return (props.checked || props.isPending) ? 'block' : 'none'}};
    content: '';
    color: #61768B;
    position: absolute;
    width: 12px;
    height: 11px;
    background-color: #61768B;
    
    cursor: pointer;

    ${(props) => props.isPending && css`
        border-top: 1px solid #61768B;
        left: 1.5px;
        width: 9px;
        height: 9px;
        border-radius: 10px;
        background-color: white;
        animation: ${spin} 2s infinite;
    `};
  }
`

const StyledTodoListItemInput = styled.input`
  display: none;
`