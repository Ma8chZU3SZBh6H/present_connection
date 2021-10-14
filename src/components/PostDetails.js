function PostDetails({name, title, body}) {
    return <div className="grid grid-cols-auto-fr gap-1 mt-4 ">
    <div className="bg-gray-100  px-1 ">Posted by</div>{" "}
    <div className="font-light">{name ?? "Loading..."}</div>
    <div className="bg-gray-100 px-1 ">TITLE</div>{" "}
    <div className="font-light">{title ?? "Loading..."}</div>
    <div className="bg-gray-100 px-1 ">BODY</div>{" "}
    <div className="font-light">{body ?? "Loading..."}</div>
    </div>
}

export default PostDetails;