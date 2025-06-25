import React from 'react';
import UseFetch02 from './useFetch02';

const DataFetch02 = () => {
  const { data, isLoading, error } = UseFetch02(
    'https://jsonplaceholder.typicode.com/todos'
  );

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {data &&
        data.map((todo) => {
          return (
            <div key={todo.id}>
              <li>{todo.id}</li>
              <li>{todo.title}</li>
            </div>
          );
        })}
    </div>
  );
};

export default DataFetch02;
