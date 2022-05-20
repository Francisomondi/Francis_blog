import React from "react";
import { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    let timer = setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
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
    return () => abortCont.abort;
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
