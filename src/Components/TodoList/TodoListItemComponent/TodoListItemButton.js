import * as React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {setTodoList} from "../../../store/TodoListSlice";

export const TodoListItemButton = ({todoData}) => {
    const [isPending, useIsPending] = useState(false);
    const dispatch = useDispatch()
    const setTodoListItem = async (type, data) => {
        switch(type) {
            case 'completed':
                if(!isPending) {
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
        <StyledTodoListItemButton
            disabled={isPending}
            todoData={todoData}
            isPending={isPending}
            onClick={async (e) => {
                e.preventDefault();
                e.stopPropagation();
                await setTodoListItem('completed', todoData)}
            }>
            <span>{todoData.completed ? 'DONE' : '//:TODO'}</span>
        </StyledTodoListItemButton>
    );
};

const StyledTodoListItemButton = styled.button`
    color: ${(props) => {
        if(props.isPending) return 'grey'
        return props.todoData.completed ? 'blue' : 'red'}
    }
`