import React from "react";

const Home = () => {
  const handleClick = () => {
    console.log("button clicked");
  };

  const handleClickAgain = name => {
    console.log("hello " + name);
  };

  return (
    <div className="home">
      <h2>This is going to be the body</h2>
      <button onClick={handleClick}>click me</button>
      <button
        onClick={() => {
          handleClickAgain("Francis");
        }}
      >
        click me
      </button>
    </div>
  );
};

export default Home;
