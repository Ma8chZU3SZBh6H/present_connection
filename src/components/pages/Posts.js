
import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";

function Home() {
  const [posts, getPosts] = useAxios("https://jsonplaceholder.typicode.com/posts");
  useEffect(()=>{
    console.log(posts);
  }, [posts]);
  return (
    <div className="container">
      <div className="mb-2 mt-4 flex md:flex-row flex-col justify-between">
      <h2 className="title">List of posts</h2>
      <a className="btn-link" href="/post/new">Create new post</a>
      </div>
      <div className="flex flex-col gap-1 mb-2 ">
        {posts.length == 0
          ? "Loading..."
          : posts.map((post) => (
              <div className="   hover:bg-gray-100 font-light" key={post.id}>
                <a href={`/post/${post.userId}/${post.id}`}>
                  <span className="bg-gray-300 bg-opacity-50 px-1 ">
                    {post.id}
                  </span>{" "}
                  {post.title}
                </a>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Home;
