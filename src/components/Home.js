import React, { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch(" http://localhost:5000/blogs")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      });
  }, []);

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };
  return (
    <div className="home">
      {blogs && (
        <Bloglist blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default Home;
