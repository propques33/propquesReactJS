import React from 'react';

const blogs = [
  {
    id: 1,
    title: 'How to Start with React',
    description: 'A beginner’s guide to getting started with React and building interactive UIs.',
    image: 'https://via.placeholder.com/150',
    link: '/blog/react-intro'
  },
  {
    id: 2,
    title: 'Understanding Tailwind CSS',
    description: 'Learn how to use Tailwind CSS to create beautiful, responsive designs.',
    image: 'https://via.placeholder.com/150',
    link: '/blog/tailwind-intro'
  },
  {
    id: 3,
    title: 'Deploying MERN Applications',
    description: 'Step-by-step guide on deploying MERN applications to production.',
    image: 'https://via.placeholder.com/150',
    link: '/blog/deploy-mern'
  },
  // Add more blog objects here
];

const Box = () => {
  return (
    <div className="py-10 px-5 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover"/>
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <a href={blog.link} className="text-indigo-600 hover:underline">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Box;
