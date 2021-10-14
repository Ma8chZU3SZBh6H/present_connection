import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import Container from "../Container";

function Post({ user_id, post_id }) {
  const post = useAxios(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const user = useAxios(
    `https://jsonplaceholder.typicode.com/users/${user_id}`
  );
  useEffect(() => {
    console.log(post);
  }, [post]);
  return (
    <Container>
      <h2 className="mb-2 mt-4">
        <a href="/">Go back</a>
      </h2>
      <div className="grid grid-cols-auto-fr gap-1 mt-4">
        <div className="bg-gray-100 px-1">Posted by</div>{" "}
        <div>{user.name ?? "Loading..."}</div>
        <div className="bg-gray-100 px-1">TITLE</div>{" "}
        <div>{post.title ?? "Loading..."}</div>
        <div className="bg-gray-100 px-1">BODY</div>{" "}
        <div>{post.body ?? "Loading..."}</div>
      </div>
    </Container>
  );
}

export default Post;
