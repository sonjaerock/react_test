import * as React from 'react';
import styled from "styled-components";

export const TodoListItemText = ({todoData}) => {
    return (
        <StyleTitleText>
            <StyleTitleDisplay>
                {todoData.title}
            </StyleTitleDisplay>
            <StyleTitleAdjust>
            </StyleTitleAdjust>
            <StyleTitleAdjustButton>
                수정
            </StyleTitleAdjustButton>
        </StyleTitleText>
    );
};
const StyleTitleText = styled.div`
  float: left;
  margin: 0 10px;
  text-align: center;
  font-size: 8px;
`

const StyleTitleDisplay = styled.div`
  float: left;
  margin: 0 10px;    
  text-align: center;
`

const StyleTitleAdjust = styled.textarea`
  float: left;
  margin: 0 10px;
`

const StyleTitleAdjustButton = styled.button`
    float: left;
`