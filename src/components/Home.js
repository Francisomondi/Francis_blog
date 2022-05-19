import React, { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch(
    "http://localhost:5000/blogs"
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>app Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
