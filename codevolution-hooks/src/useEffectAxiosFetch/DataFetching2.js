// snippet : rafce - 1
import React, { useState, useEffect } from "react";
import Axios from "axios";

const DataFetching2 = () => {
  // copied url from jsonplaceholder - 2
  // https://jsonplaceholder.typicode.com/posts

  // snippet : useS - 3
  const [post, setPost] = useState({});
  // snippet : useS - 4
  const [id, setId] = useState(1);
  // snippet : useS - 5
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  // create handleClick() method and invoke setIdFromButtonClick(id) - 6
  // snippet : nfn
  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  // invoke axios on useEffect - 7
  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);

        // if setPosts() is not included. below will be the output on console
        // Object
        // config: {url: "https://jsonplaceholder.typicode.com/posts", method: "get", headers: {…}, transformRequest: Array(1), transformResponse: Array(1), …}
        // data: (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        // headers: {cache-control: "max-age=43200", content-type: "application/json; charset=utf-8", expires: "-1", pragma: "no-cache"}
        // request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
        // status: 200
        // statusText: ""

        // to make fetched data visible on webpage
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // ,[idFromButtonClick] to make data fetching based on idFromButtonClick
  }, [idFromButtonClick]);

  return (
    <div>
      {/* render on JSX input with value={id} and onChange={() => setId(e.target.value)} - 8 */}
      <input value={id} onChange={(e) => setId(e.target.value)} type="text" />
      {/* fetch button to be trigger by onClick - 9 */}
      <button onClick={handleClick}>Fetch data</button>
      {/* render on JSX div {post.title} - 10 */}
      <div>{post.title}</div>
    </div>
  );
};

export default DataFetching2;
