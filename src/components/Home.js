import React, { useState, useEffect } from "react";
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

  const [name, setName] = useState("FRANCIS AZIZ");
  useEffect(() => {
    console.log("re-rendered");
    console.log(name);
  }, [name]);

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };
  return (
    <div className="home">
      <Bloglist blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      <button onClick={() => setName("ZengMaster 254 ")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
