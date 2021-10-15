import useAxios from "../../hooks/useAxios";
import PostDetails from "../PostDetails";
import { useParams } from "react-router";

function Post() {
  const { user_id, post_id } = useParams();
  const [post, getPost] = useAxios(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const [user, getUser] = useAxios(
    `https://jsonplaceholder.typicode.com/users/${user_id}`
  );
  return (
    <div className="container">
      <h2 className="mb-2 mt-4 ">
        <a className="btn-link" href="/">
          Go back
        </a>
      </h2>
      <PostDetails {...user} {...post} />
    </div>
  );
}

export default Post;
