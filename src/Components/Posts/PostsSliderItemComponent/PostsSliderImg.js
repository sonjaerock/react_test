// @flow
import * as React from 'react';
import styled from "styled-components";

export const PostsSliderImg = ({post}) => {
    return (
        <StyledPostsSliderImageContainer>
            <StyledPostsSliderImage src={`https://picsum.photos/id/${post.id + 10}/400/250`}>
            </StyledPostsSliderImage>
        </StyledPostsSliderImageContainer>
    );
};



const StyledPostsSliderImageContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
`

const StyledPostsSliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  &:hover {
    transition: all 0.2s linear;
    transform: scale(1.2);
  }
`