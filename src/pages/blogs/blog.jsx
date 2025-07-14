import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { blogsData } from '../../data';

const Blog = () => {
  const { title } = useParams();
  const [bodyData, setBodyData] = useState('');
  useEffect(() => {
    const blogBody = blogsData.filter((blog) => blog.title === title);
    setBodyData(blogBody[0].body);
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <h2>{bodyData.slice(0, 50)}</h2>
      <p>{bodyData.slice(51, 300)}</p>
    </div>
  );
};

export default Blog;
