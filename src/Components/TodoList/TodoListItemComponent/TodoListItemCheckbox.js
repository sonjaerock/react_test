import * as React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux";
import styled, { keyframes, css } from "styled-components";
import {setTodoList} from "../../../store/TodoListSlice";

export const TodoListItemCheckbox = ({todoData}) => {
    const [isPending, useIsPending] = useState(false);
    const [checked, useChecked] = useState(todoData.completed);

    const dispatch = useDispatch()
    const setTodoListItem = async (type, data) => {
        switch (type) {
            case 'completed':
                if (!isPending) {
                    useIsPending(true)
                    await dispatch(setTodoList({
                        id: data.id,
                        completed: !data.completed
                    }))
                    useIsPending(false)
                }
                break;

            default:
                return;
        }
    }

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
                    await setTodoListItem('completed', todoData)
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
    height: 10px;
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