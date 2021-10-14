import axios from "axios";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import Container from "../Container";

function Home() {
  const posts = useAxios("https://jsonplaceholder.typicode.com/posts");

  return (
    <Container>
      <h2 className="mb-2 mt-4">List of posts</h2>
      <div className="flex flex-col gap-1 mb-2">
        {posts.length == 0
          ? "Loading..."
          : posts.map((post) => (
              <div className="   hover:bg-gray-100 " key={post.id}>
                <a href={`/post/${post.userId}/${post.id}`}>
                  <span className="bg-gray-300 bg-opacity-50 px-1 font-light">
                    {post.id}
                  </span>{" "}
                  {post.title}
                </a>
              </div>
            ))}
      </div>
    </Container>
  );
}

export default Home;
