import * as React from 'react';
import styled from "styled-components";
import {useState, useEffect} from "react";
import {PostsSliderItem} from "./PostsSliderItem";
import {PostApiEndPoints} from "../../store/api/PostApi";

export const PostsSlider = () => {
    const frontCloneCount = 1;
    const displayCount = 3;
    const {data: posts, isFetching, isLoading, isError} = PostApiEndPoints.getPosts.useQuery('');
    const [transformCount, useTransformCount] = useState(-frontCloneCount);

    // let tempPosts = []
    // if(posts) {
    //     let convertPosts = []
    //     for (let i = posts.length - displayCount * frontCloneCount; i < posts.length; i++) {
    //         convertPosts.push(posts[i])
    //     }
    //     console.log(convertPosts)
    //     posts.forEach((post) => {
    //         convertPosts.push(post)
    //     })
    //     tempPosts = convertPosts
    // }

    const clickSliderArrow = (type) => {
        useTransformCount(Number(transformCount) + type)
        console.log(transformCount)
    }

    if(isFetching) return (<div>fetching...</div>)
    if(isLoading) return (<div>loading...</div>)

    return (
        <StyledPostsSlider>
            <StyledPostsSliderArrow
                type={'left'}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    clickSliderArrow(1)
                }}>
                {"<"}
            </StyledPostsSliderArrow>
            <StyledPostsSliderArrow
                type={'right'}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    clickSliderArrow(-1)
                }}>
                {">"}
            </StyledPostsSliderArrow>

            <StyledPostsSliderContainer
                transformCount={transformCount}>
                {
                    posts.map((_, idx) => {
                        return (
                            <PostsSliderItem
                                key={idx}
                                idx={idx}>
                            </PostsSliderItem>
                        )
                    })
                }
            </StyledPostsSliderContainer>
        </StyledPostsSlider>
    );
};


const StyledPostsSlider = styled.div`
  margin-top: 20px;
  width: 100%;
`

const StyledPostsSliderContainer = styled.div`
  display: flex;
  animation-duration: 1s;
  transition:all 0.3s ease-in-out;
  ${(props) => {
        return `transform: translate(${props.transformCount * 100}%); `
    }
  }
  ::-webkit-scrollbar {
    display: none;
  }

`

const StyledPostsSliderArrow = styled.button`
  z-index: 10;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
  //border: none;
  //background: transparent;
  font-weight: 700;
  font-size: 20px;
  color: white;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 400px;
  ${(props) => {
    if (props.type === 'left') {
      return `left: 10px`;
    } else {
      return `right: 10px`;
    }
  }}
`