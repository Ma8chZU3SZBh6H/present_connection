import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import Container from "../Container";
import PostDetails from "../PostDetails";

function Post({ user_id, post_id }) {
  const [post, getPost] = useAxios(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const [user, getUser] = useAxios(
    `https://jsonplaceholder.typicode.com/users/${user_id}`
  );
  return (
    <Container>
      <h2 className="mb-2 mt-4 text-xl font-light">
        <a className="" href="/">Go back</a>
      </h2>
      <PostDetails {...user} {...post}/>
    </Container>
  );
}

export default Post;
