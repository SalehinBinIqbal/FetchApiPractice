import React, { useState, useEffect } from "react";

function PostApi() {
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React Hooks POST Request Example" }),
    };
    fetch("https://reqres.in/api/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => setPostId(data.id));
  }, []);

  return (
    <div>
      <h1>POST Request with React Hooks</h1>
      <div>Returned Id: {postId}</div>
    </div>
  );
}

export default PostApi;
