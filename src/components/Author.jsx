import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const BlogPage = () => {
  const navigate = useNavigate();
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  const blogPosts = [
    {
      title: 'Five alternatives to boost your coworking space revenue',
      date: 'April 15, 2024',
      comments: 'No Comments',
      image: '/path/to/image1.jpg',
      description: 'When it comes to the bright and bouncing-back world of the coworking industry, making high profits is not limited to the desks and WiFi setup. Exploring alternative revenue streams can significantly impact profitability.',
      slug: 'five-alternatives',
      tag: 'FEATURED'
    },
    {
      title: 'How Virtual offices can be a hurdle for coworking spaces?',
      date: 'April 15, 2024',
      comments: 'No Comments',
      image: '/path/to/image2.jpg',
      description: 'The concept of working from virtual offices has become the new normal. The setup is digitized so that one can work from absolutely anywhere while coworking spaces face challenges to attract such users.',
      slug: 'virtual-offices-hurdle',
      tag: ''
    },
    {
      title: 'Top 5 Reasons to Invest in Coworking Spaces in 2023',
      date: 'October 28, 2023',
      comments: 'No Comments',
      image: '/path/to/image3.jpg',
      description: 'Coworking spaces have become increasingly popular in recent years, as more people move away from traditional office settings. This article highlights key reasons why investing in coworking spaces in 2023 is a smart move.',
      slug: 'top-5-reasons-invest',
      tag: 'PLANNING'
    },
    {
      title: 'Invest In Coworking Space In India',
      date: 'August 21, 2023',
      comments: 'No Comments',
      image: '/path/to/image4.jpg',
      description: 'How to invest in coworking spaces in India. This guide covers the growth of the coworking space industry and opportunities for investors to tap into the expanding market.',
      slug: 'invest-coworking-india',
      tag: 'PLANNING'
    },
    {
      title: 'How to Obtain a Coworking Franchise In India',
      date: 'August 1, 2023',
      comments: 'No Comments',
      image: '/path/to/image5.jpg',
      description: 'The rise of coworking spaces and the potential of a coworking franchise. This article provides a step-by-step guide on obtaining a coworking franchise in India.',
      slug: 'obtain-franchise-india',
      tag: 'INDUSTRY'
    },
    {
      title: 'The Top Five Affordable Coworking Spaces',
      date: 'July 7, 2023',
      comments: 'No Comments',
      image: '/path/to/image6.jpg',
      description: 'Understanding the rise of affordable coworking spaces. This piece takes a closer look at the most budget-friendly coworking spaces and how they meet professional needs without compromising quality.',
      slug: 'affordable-coworking-spaces',
      tag: 'PLANNING'
    },
    {
      title: 'Here’s How Landlords can Benefit From the Coworking Boom',
      date: 'May 5, 2023',
      comments: 'No Comments',
      image: '/path/to/image7.jpg',
      description: 'Landlords are seeing the benefits of converting their traditional spaces into coworking setups. This article discusses how property owners can gain from the coworking boom.',
      slug: 'landlords-benefit-coworking',
      tag: 'SETUP'
    },
    {
      title: 'How Are Large Organizations Taking Advantage Of Coworking For Expansion?',
      date: 'May 5, 2023',
      comments: 'No Comments',
      image: '/path/to/image8.jpg',
      description: 'Coworking spaces are not just for startups; large organizations are also leveraging them for expansion. This article explains why major corporations are turning to coworking for flexible growth options.',
      slug: 'large-organizations-coworking',
      tag: 'OPERATING'
    },
    {
      title: 'Flex Office Space Utilization After 2020 – Solutions & Predictions',
      date: 'May 5, 2023',
      comments: 'No Comments',
      image: '/path/to/image9.jpg',
      description: 'The post-pandemic world has changed the office space landscape. This piece explores how flexible office space utilization has evolved and predicts future trends.',
      slug: 'flex-space-utilization',
      tag: ''
    },
    {
      title: 'Global Coworking Growth Study 2020',
      date: 'May 5, 2023',
      comments: 'No Comments',
      image: '/path/to/image10.jpg',
      description: 'The coworking industry has seen significant growth over the years. This comprehensive study provides an in-depth look at the trends and growth statistics from 2020.',
      slug: 'global-growth-study',
      tag: ''
    },
    {
      title: 'Maximizing the Potential of Coworking Spaces for Startups',
      date: 'April 20, 2024',
      comments: 'No Comments',
      image: '/path/to/image11.jpg',
      description: 'Startups can greatly benefit from coworking spaces, which offer flexibility and networking opportunities. This article shares strategies for startups to make the most out of coworking spaces.',
      slug: 'maximizing-coworking-startups',
      tag: 'FEATURED'
    }
    // Add more blog entries as needed
  ];

  const showMoreBlogs = () => {
    setVisibleBlogs(visibleBlogs + 6);
  };

  return (
    <div className="font-sans mt-20 ">
      {/* Header Section */}
      <section className="py-16 px-8 md:px-32 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Author: Adarsh Dixit - Flexible Workspace Specialist</h1>
        <p className="text-lg md:text-xl text-gray-700">At our managed office spaces, we possess a wealth of valuable information that we are enthusiastic about sharing with our friends and clients. Our team of seasoned consultants offers expert insights that we believe will be highly advantageous to you.</p>
      </section>

      {/* Blog Post Section */}
      <section className="py-16 px-8 md:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, visibleBlogs).map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                {post.tag && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mb-2 inline-block">{post.tag}</span>}
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <button 
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </button>
                <div className="text-gray-500 text-sm mt-4">
                  <p>{post.date} | {post.comments}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleBlogs < blogPosts.length && (
          <div className="text-center mt-8">
            <button 
              onClick={showMoreBlogs} 
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Load More
            </button>
          </div>
        )}
      </section>



    </div>
  );
};

export default BlogPage;
