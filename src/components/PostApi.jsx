import React, { useState, useEffect } from "react";

import classes from "./PostApi.module.css";

function PostApi() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Create");
  const [prompt, setPrompt] = useState("");

  const postData = async (e) => {
    e.preventDefault();
    setButtonText("Loading...");
    try {
      const res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      console.log(res);
      const resJson = await res.json();
      console.log(resJson);
      if (res.ok) {
        setName("");
        setEmail("");
        setPassword("");
        setButtonText("Create");
        setPrompt("User created successfully");
      } else setPrompt("Opps! Something bad happened");
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ title: "React Hooks POST Request Example" }),
  //   };
  //   fetch("https://reqres.in/api/posts", requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => setPostId(data.id));
  // }, []);

  return (
    <div className={classes.container}>
      <form onSubmit={postData}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">{buttonText}</button>

        <div className={classes.message}>{prompt && <p>{prompt}</p>}</div>
      </form>
    </div>
  );
}

export default PostApi;
