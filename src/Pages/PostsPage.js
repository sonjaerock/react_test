import PostsContainer from "../Containers/PostsContainer";
import styled from "styled-components";

function PostsPage() {
    return (
        <StyledPostsPage>
            <PostsContainer></PostsContainer>
        </StyledPostsPage>
    );
}

const StyledPostsPage = styled.div`
  overflow: auto;
  height: 100vh;
  background: #292d33;
  color: white;
`

export default PostsPage;


