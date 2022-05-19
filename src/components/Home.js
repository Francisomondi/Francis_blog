import React, { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let timer = setTimeout(() => {
      fetch(" http://localhost:5000/blogs")
        .then(res => {
          if (!res.ok) {
            throw Error("could not fetch data from the json file");
          }
          return res.json();
        })
        .then(data => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>app Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
