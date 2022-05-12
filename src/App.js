import "./App.css";

function App() {
  const title = "this is going to be our heading";
  const like = 50;
  const person = { name: "Francis", age: 30 };
  const link =
    "https://www.youtube.com/watch?v=pnhO8UaCgxg&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=4";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>this is going to be the parrent page</p>
        <h4>Liked {like} times</h4>
        <h4>
          written by <a href={link}>{person.name}</a>
        </h4>
      </div>
    </div>
  );
}

export default App;
