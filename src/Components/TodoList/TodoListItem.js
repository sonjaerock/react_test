import * as React from 'react';
import styled from "styled-components";
import {TodoListItemButton} from "./TodoListItemComponent/TodoListItemButton";
import {TodoListItemText} from "./TodoListItemComponent/TodoListItemText";


export const TodoListItem = ({todoData}) => {
    return (
        <StyledContainer>
            <StyledItemComponent>{todoData.id}</StyledItemComponent>
            <StyledItemComponent>{todoData.userId}</StyledItemComponent>
            <StyledItemComponent>
                <TodoListItemText todoData={todoData}/>
            </StyledItemComponent>
            <StyledItemComponent>
                <TodoListItemButton todoData={todoData}/>
            </StyledItemComponent>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
  float: left;
  width: 100%;
  height: 30px;
`

const StyledItemComponent = styled.div`
    float:left;
    font-size: 8px;
`
