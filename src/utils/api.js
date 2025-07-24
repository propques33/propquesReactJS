import axios from 'axios';

const API_URL = 'https://api.flexmidas.com/api';

// Cache blogs in session storage for 5 minutes
export const getBlogs = async () => {
  const cachedBlogs = sessionStorage.getItem('blogs');
  const cacheTimestamp = sessionStorage.getItem('blogs_timestamp');
  
  if (cachedBlogs && cacheTimestamp && (new Date().getTime() - cacheTimestamp < 5 * 60 * 1000)) {
    return JSON.parse(cachedBlogs);
  }

  try {
    const response = await axios.get(`${API_URL}/blogs?publishOn=Propques`);
    const blogs = response.data.pages?.filter(blog => blog.visible) || [];
    sessionStorage.setItem('blogs', JSON.stringify(blogs));
    sessionStorage.setItem('blogs_timestamp', new Date().getTime());
    return blogs;
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    throw new Error('Failed to fetch blogs');
  }
};

export const getBlogBySlug = async (slug) => {
  try {
    const response = await axios.get(`${API_URL}/blogs/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch blog for slug ${slug}:`, error);
    throw new Error('Failed to fetch blog');
  }
}; 