import React from "react";

const useFetch = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let timer = setTimeout(() => {
      fetch(" http://localhost:5000/blogs")
        .then(res => {
          if (!res.ok) {
            throw Error("could not fetch data from the json file");
          }
          return res.json();
        })
        .then(data => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
};

export default useFetch;
