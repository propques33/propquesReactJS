import axios from "axios";

// const API_URL = "http://localhost:1337/api/blogs";
const API_URL = "https://pq-backend-fus-pq-blogs-elbtf.ondigitalocean.app/api/blogs";

export const fetchBlogs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchBlogById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
