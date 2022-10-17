import * as React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {getPosts} from "../../store/PostsSlice";
import {useEffect} from "react";
import {PostsSliderItem} from "./PostsSliderItem";

export const PostsSlider = () => {
    const frontCloneCount = 1;
    const displayCount = 3;

    const [transformCount, useTransformCount] = useState(-frontCloneCount);
    const [tempPosts, useTempPosts] = useState([]);
    const posts = useSelector((state) => state.PostsReducer.response)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    useEffect(() => {
        if(posts.length !== 0) {
            let convertPosts = []
            for(let i=posts.length-displayCount*frontCloneCount; i<posts.length; i++) {
                convertPosts.push(posts[i])
            }
            console.log(convertPosts)
            posts.forEach((post) => {
                convertPosts.push(post)
            })
            useTempPosts(convertPosts);
        }
    }, [posts])

    const clickSliderArrow = (type) => {
        useTransformCount(Number(transformCount) + type)
        console.log(transformCount)
    }

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
                    tempPosts.map((post, idx) => {
                        return (
                            <PostsSliderItem
                                key={idx}
                                idx={idx}
                                post={post}>
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