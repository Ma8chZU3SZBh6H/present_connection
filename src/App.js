import axios from "axios";
import { useEffect, useState } from "react";
import Container from "./components/Container";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const posts = (
        await axios.get("https://jsonplaceholder.typicode.com/posts")
      ).data;
      setPosts(posts);
      console.log(posts);
    })();
  }, []);
  return (
    <>
      <div className="bg-gray-100">
        <Container className="py-2 ">
          <h1 className="font-light text-2xl text-center md:text-left">
            Present Connection
          </h1>
        </Container>
      </div>
      <Container className="flex flex-col gap-1 ">
        <h2 className="mb-2 mt-4">List of posts</h2>
        {posts.map((post) => (
          <div className="   hover:bg-gray-100 cursor-pointer" key={post.id}>
            <p>
              <span className="bg-gray-300 bg-opacity-50 px-1 font-light">
                {post.id}
              </span>{" "}
              {post.title}
            </p>
          </div>
        ))}
      </Container>
    </>
  );
}

export default App;
