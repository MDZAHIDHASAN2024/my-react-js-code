import React from 'react';
import { Link, useNavigate } from 'react-router';

import { blogsData } from '../../data';

const Blogs = () => {
  const navigate = useNavigate();

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div>
      <h3>This is a Blogs page</h3>
      {blogsData.map((blog) => {
        const { id, title, body } = blog;
        return (
          <article key={id}>
            <h2>{title}</h2>
            <p>{truncateString(body, 100)}</p>
            <Link to={title}>Learn more</Link>
          </article>
        );
      })}
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Go to home
      </button>
    </div>
  );
};

export default Blogs;
