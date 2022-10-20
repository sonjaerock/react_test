// @flow
import * as React from 'react';
import styled, {keyframes} from "styled-components";
import {PostApiEndPoints} from "../../../store/api/PostApi";

export const PostsSliderContents = ({idx}) => {
    const {data: posts, isFetching, isLoading, isError} = PostApiEndPoints.getPosts.useQueryState('');

    return (
        <StylePostsSliderItemContentContainer>
            <StyledPostsSliderItemTitle>
                {posts[idx].title}
            </StyledPostsSliderItemTitle>
            <StyledPostsSliderItemBody>
                {posts[idx].body}
            </StyledPostsSliderItemBody>

            <StyledPostsSliderButton>
                READ MORE
            </StyledPostsSliderButton>
        </StylePostsSliderItemContentContainer>
    );
};

const StylePostsSliderItemContentContainer = styled.div`
  text-align: center;
  padding: 10px;
`

const StyledPostsSliderItemTitle = styled.div`
  font-size: 1.25rem;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  margin-bottom: 10px;
`

const StyledPostsSliderItemBody = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`

const rainbow = keyframes`
  0% {
    color: #ff2a2a;
  }
  15% {
    color: #ff7a2a;
  }
  30% {
    color: #ffc52a;
  }
  45% {
    color: #43ff2a;
  }
  60% {
    color: #2a89ff;
  }
  75% {
    color: #202082;
  }
  90% {
    color: #6b2aff;
  }
  100% {
    color: #e82aff;
  }
`
const StyledPostsSliderButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  width: 100px;
  border: none;
  background: none;
  font-size: 0.9rem;
  font-weight: 700;
  &:hover{
    animation: ${rainbow} 2s;
    animation-iteration-count: infinite;
  }
`