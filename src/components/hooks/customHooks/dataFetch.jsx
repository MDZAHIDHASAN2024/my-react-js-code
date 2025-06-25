import React from 'react';
import UseFetch from './useFetch';

const DataFetch = () => {
  // const { data, isLoading, error } = UseFetch(
  //   'https://jsonplaceholder.typicode.com/posts'
  // );
  const { data, isLoading, error } = UseFetch(
    'https://jsonplaceholder.typicode.com/todos'
  );

  const isLodingHandle = <p>Loading...</p>;
  const errorHandle = <p>{error}</p>;
  return (
    <div>
      {data &&
        data.map((todo) => {
          return (
            <section key={todo.id}>
              <p>{todo.id}</p>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
            </section>
          );
        })}
      {isLoading && isLodingHandle}
      {error && errorHandle}
    </div>
  );
};

export default DataFetch;
