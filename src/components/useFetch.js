import React from "react";
import { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let timer = setTimeout(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw Error("could not fetch data from the json file");
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
    return () => clearTimeout(timer);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
