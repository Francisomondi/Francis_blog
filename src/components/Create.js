import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Francis Omondi ");
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    const blog = { title, author, body };
    fetch("http://localhost:5000/blogs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log(blog);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label>Blog Body</label>
        <textarea
          required
          value={body}
          onChange={e => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author</label>
        <select value={author} onChange={e => setAuthor(e.target.value)}>
          <option value="Francis Omondi">Francis Omondi</option>
          <option value="Brian Otieno">Brian Otieno</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
