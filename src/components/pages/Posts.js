import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import Pages from "../Pagination";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Home() {
  const { page = 0 } = useParams();
  const [posts, getPosts] = useAxios();
  useEffect(() => {
    getPosts(
      `https://jsonplaceholder.typicode.com/posts?_start=${page * 10}&_limit=10`
    );
  }, [page]);
  return (
    <div className="container">
      <div className="mb-2 mt-4 flex md:flex-row flex-col justify-between">
        <h2 className="title">List of posts</h2>
        <Link className="btn-link" to="/post/new">
          Create new post
        </Link>
      </div>
      <div className="flex flex-col gap-1 mb-4 ">
        {posts.length == 0 ? (
          "Loading..."
        ) : (
          <table className="border-collapse font-light">
            <tbody>
              <tr>
                <th className="w-8"></th>
                <th></th>
              </tr>

              {posts.map((post, index) => (
                <tr
                  key={index}
                  className="border-t-2 border-gray-100 border-b-2 hover:bg-gray-100"
                >
                  <td>{post.id}</td>
                  <td>
                    <Link to={`/post/${post.userId}/${post.id}`}>
                      {post.title}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Pages page={page} />
    </div>
  );
}

export default Home;
