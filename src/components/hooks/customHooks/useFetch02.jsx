import React, { useEffect, useState } from 'react';

const UseFetch02 = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const dataFetch = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    dataFetch(url);
  }, [url]);
  return { data, isLoading, error };
};

export default UseFetch02;
