import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(
    "http://localhost:5000/blogs/" + id
  );
  return (
    <div className="blog-details">
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <aticle>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </aticle>
      )}
    </div>
  );
};

export default BlogDetails;
