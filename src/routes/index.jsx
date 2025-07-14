import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from '../pages/home';
import About from '../pages/about';
import Contract from '../pages/contract';
import Blogs from '../pages/blogs';
import Navbar from '../layout/navbar';
import Blog from '../pages/blogs/blog';

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:title" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
