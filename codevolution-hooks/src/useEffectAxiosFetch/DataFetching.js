// snippet : rafce - 1
import React, { useState, useEffect } from "react";
import Axios from "axios";

const DataFetching = () => {
  // copied url from jsonplaceholder - 2
  // https://jsonplaceholder.typicode.com/posts

  // snippet : useS - 3
  const [posts, setPosts] = useState([]);

  // invoke axios on useEffect - 4
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
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
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // ,[] to make data fetching only once
  }, []);

  return (
    <div>
      {/* invoke posts as ul - 5 */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetching;
