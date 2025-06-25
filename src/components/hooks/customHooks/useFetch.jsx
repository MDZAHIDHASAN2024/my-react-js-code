import React, { useEffect, useState } from 'react';

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('Data is not fetched');
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(false);
        console.log(data);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [url]);
  return { data, isLoading, error };
};

export default UseFetch;
