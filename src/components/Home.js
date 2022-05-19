import React, { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      fetch(" http://localhost:5000/blogs")
        .then(res => {
          return res.json();
        })
        .then(data => {
          setBlogs(data);
          setIsPending(false);
        })
        .catch(err => {
          console.log("there was an error");
        });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
