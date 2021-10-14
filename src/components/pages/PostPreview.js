import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import Container from "../Container";
import PostDetails from "../PostDetails";

function PostFake({ data }) {
  
  return (
    <Container>
      <h2 className="mb-2 mt-4 text-xl font-light">
        <a className="" href="/">Go back</a>
      </h2>
      <PostDetails {...data}/>
    </Container>
  );
}

export default PostFake;
