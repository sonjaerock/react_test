import * as React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {setTodoList, deleteTodoList} from "../../../store/TodoListSlice";

export const TodoListItemButton = ({title, type, todoData}) => {
    console.log('test')
    const [isPending, useIsPending] = useState(false);
    const dispatch = useDispatch()
    const setTodoListItem = async (type, data) => {
        switch(type) {
            case 'put':
                if(!isPending) {
                    useIsPending(true)
                    await dispatch(setTodoList({
                        id: data.id,
                        completed: !data.completed
                    }))
                    useIsPending(false)
                }
                break;

            case 'delete':
                if(!isPending) {
                    useIsPending(true)
                    await dispatch(deleteTodoList({
                        id: data.id
                    }))
                    useIsPending(false)
                }
                break;

            default:
                return;
        }
    }

    return (
        <StyledTodoListItemButton
            disabled={isPending}
            isPending={isPending}
            onClick={async (e) => {
                e.preventDefault();
                e.stopPropagation();
                await setTodoListItem(type, todoData)}
            }>
            {title}
        </StyledTodoListItemButton>
    );
};

const StyledTodoListItemButton = styled.button`
  float: right;
  height: 20px;
  margin-left: 10px;
  color: white;
  border: 1px #61768B solid;
  border-radius: 1px;
  background: #61768B;
`
