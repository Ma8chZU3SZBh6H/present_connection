import PostDetails from "../PostDetails";

function PostFake({ data }) {
  
  return (
    <div className="container">
      <h2 className="mb-2 mt-4 text-xl font-light">
        <a className="" href="/">Go back</a>
      </h2>
      <PostDetails {...data}/>
    </div>
  );
}

export default PostFake;
