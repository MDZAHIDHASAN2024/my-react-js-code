import UseFetch03 from './useFetch03';

const DataFetch03 = () => {
  const { data, isLoading, error } = UseFetch03(
    'https://jsonplaceholder.typicode.com/posts'
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

export default DataFetch03;
