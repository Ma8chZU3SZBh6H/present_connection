function PostDetails({ name, title, body }) {
  return (
    <table className="font-light border-collapse">
      <tbody>
        <tr>
          <th className="w-24"></th>
          <th></th>
        </tr>
        <tr className="border-t-2 border-b-2">
          <td>Posted by </td>
          <td>{name ?? "Loading..."}</td>
        </tr>
        <tr className="border-t-2 border-b-2">
          <td>Title </td>
          <td>{title ?? "Loading..."}</td>
        </tr>
        <tr className="border-t-2 border-b-2">
          <td>Post </td>
          <td>{body ?? "Loading..."}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default PostDetails;
