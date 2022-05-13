import React, { useState } from "react";

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
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
