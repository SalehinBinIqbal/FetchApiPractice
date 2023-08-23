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
      const res = await fetch("https://api.npms.io/v2/search?q=react");
      if (!res.ok) {
        throw res;
      }
      const result = await res.json();
      setData(result);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      {error && <h1>There is a error</h1>}
      <div className={classes.tableHead}>
        <div className={classes.headWrapper}>
          <p>Name</p>
          <p>Email</p>
        </div>
        <p>Score</p>
      </div>
      <button onClick={showData}>Show Data</button>
      {data &&
        data.results.map((info) => {
          return (
            <div className={classes.items}>
              <div>
                {info.package.maintainers.map((item, index) => {
                  return (
                    <div className={classes.item} key={index}>
                      <p>{item.username}</p>
                      <p>{item.email}</p>
                    </div>
                  );
                })}
              </div>
              <p>{info.score.final}</p>
            </div>
          );
        })}
    </>
  );
}

export default FetchApi;
