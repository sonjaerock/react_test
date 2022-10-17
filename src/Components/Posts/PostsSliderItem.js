import * as React from 'react';
import styled from "styled-components";
import {PostsSliderImg} from "./PostsSliderItemComponent/PostsSliderImg";
import {PostsSliderContents} from "./PostsSliderItemComponent/PostsSliderContents";

export const PostsSliderItem = ({post, idx}) => {
    return (
        <StyledPostsSliderItem idx={idx}>
            <PostsSliderImg
                post={post}
                idx={idx}>

            </PostsSliderImg>
            <PostsSliderContents
                post={post}
                idx={idx}>
            </PostsSliderContents>
        </StyledPostsSliderItem>
    );
};

const StyledPostsSliderItem = styled.div`
  background: white;
  color: black;
  float: left;
  margin-bottom: 30px;
  height: 430px;
  width: 31.3333333%;
  margin-left: 1%;
  margin-right: 1%;
  flex-shrink: 0;
}
`
