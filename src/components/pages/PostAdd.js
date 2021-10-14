import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import Container from "../Container";
import PostDetails from "../PostDetails";

function PostAdd({ user_id, post_id }) {
    const [submitted, setSubmitted] = useState(false);
    const [inputData, setInputData] = useState({});
    const [postData, getPostData] = useAxios();

    const dataHandler = (e) =>{
        const {name, value} = e.target;
        setInputData({...inputData, [name]: value});
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        getPostData("https://jsonplaceholder.typicode.com/posts", inputData);
        setSubmitted(true);
    };
  return (
    <Container>
      <h2 className="mb-2 mt-4 text-xl font-light">
        <a  href="/">Go back</a>
      </h2>
      <div >
        {submitted ? <PostDetails {...postData}/> : <form onSubmit={(e)=>submitHandler(e)} className="flex flex-col gap-3" action="/post/new/preview" method="post">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
            <label className="text-lg font-light" htmlFor="name">Your name</label>
            <input required onChange={e=>dataHandler(e)} name="name" className="bg-gray-100 px-2" id="name" type="text" placeholder="Dragon" />
            </div>
            <div className="flex flex-col gap-1">
            <label className="text-lg font-light" htmlFor="title">Title</label>
            <input required onChange={e=>dataHandler(e)} name="title" className="bg-gray-100 px-2" id="title" type="text" placeholder="How to hunt dragons" />
            </div>
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-lg font-light" htmlFor="body">Post</label>
                <textarea required onChange={e=>dataHandler(e)} className="bg-gray-100 px-2" name="body" id="body" cols="30" rows="10" placeholder="..."></textarea>
            </div>
            <div className="flex flex-col">
                <div>
                    <input className="py-1 px-2 bg-red-500 text-white rounded cursor-pointer" type="submit" value="Post" />
                    </div>
            </div>
        </form>}
      </div>
    </Container>
  );
}

export default PostAdd;
