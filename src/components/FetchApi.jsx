import { useState, useEffect } from "react";
import classes from "./FetchApi.module.css";

function FetchApi() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch("https://api.npms.io/v2/search?q=react")
  //     .then((resource) => {
  //       if (resource.ok) {
  //         return resource.json();
  //       }
  //       throw resource;
  //     })
  //     .then((data) => {
  //       setData(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setError(error);
  //     });
  // }, []);

  const showData = async () => {
    try {
      const res = await fetch("https://reqres.in/api/posts");
      if (res.ok) {
        const resJson = await res.json();
        setData(resJson);
      } else {
        throw res;
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      {error && <h1>There is a error</h1>}
      <div className={classes.tableHead}>
        <p>ID</p>
        <p>Name</p>
        <p>Year</p>
        <p>Color</p>
      </div>
      {data &&
        data.data.map((info) => {
          return (
            <div className={classes.item} key={info.id}>
              <p>{info.id}</p>
              <p>{info.name}</p>
              <p>{info.year}</p>
              <p>{info.color}</p>
            </div>
          );
        })}
      <div className={classes.btn}>
        <button onClick={showData}>Show Data</button>
      </div>
    </>
  );
}

export default FetchApi;
