import { useState, useEffect } from "react";
import classes from "./FetchApi.module.css";

function FetchApi() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://reqres.in/api/posts")
      .then((resource) => {
        if (resource.ok) {
          return resource.json();
        }
        throw resource;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, []);

  return (
    <>
      {error && <p>There is a error</p>}
      <div className={classes.boxHead}>
        <p>ID</p>
        <p>Name</p>
        <p>Year</p>
        <p>Color</p>
      </div>
      {data &&
        data.data.map((info) => {
          return (
            <div className={classes.box} key={info.id}>
              <p>{info.id}</p>
              <p>{info.name}</p>
              <p>{info.year}</p>
              <p>{info.color}</p>
            </div>
          );
        })}
    </>
  );
}

export default FetchApi;
