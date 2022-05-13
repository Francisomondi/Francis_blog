import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Francis");
  const handleClick = () => {
    setName("Sophia");
  };

  return (
    <div className="home">
      <h2>This is going to be the body</h2>
      <p>{name}</p>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Home;
