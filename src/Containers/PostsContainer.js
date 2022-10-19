import styled from "styled-components";
import {PostsSlider} from "../Components/Posts/PostsSlider";

function PostsContainer() {
    return (
       <StyledPostsContainer>
           <StyledPostsContainerMainTitle>Posts</StyledPostsContainerMainTitle>
           <StyledPostsContainerSubTitle>Posts subtitle</StyledPostsContainerSubTitle>

           <PostsSlider></PostsSlider>
       </StyledPostsContainer>
    );
}

const StyledPostsContainer = styled.div`
  position: relative;
  margin: 100px 10%;
  overflow: scroll;
  padding: 20px;
  background: #1f1f1f;
  
  ::-webkit-scrollbar {
    display: none;
  }
`

const StyledPostsContainerMainTitle = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 auto;
  font-size: 4.5rem;
  font-weight: 700;
`

const StyledPostsContainerSubTitle = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 auto;
  font-size: 1.125rem;
`
export default PostsContainer;
