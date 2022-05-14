import React, { useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "The first blog",
      body: "Lorem ipsum dolor",
      author: "Francis Aziz"
    },
    {
      id: 2,
      title: "The second blog",
      body: "Lorem ipsum dolor",
      author: "Sophia Amin"
    },
    {
      id: 3,
      title: "The third blog",
      body: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor ",
      author: "Rodgers KImbepe"
    }
  ]);
  return (
    <div className="home">
      <Bloglist blogs={blogs} title="All blogs" />
    </div>
  );
};

export default Home;
