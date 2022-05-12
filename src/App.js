import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const title = "this is going to be our heading";
  const like = 50;
  const person = { name: "Francis", age: 30 };
  const link =
    "https://www.youtube.com/watch?v=pnhO8UaCgxg&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=4";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {title}
        <Home />
      </div>
    </div>
  );
}

export default App;
