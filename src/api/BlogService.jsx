import axios from "axios";

const API_URL = "http://localhost:1337/api/blogs";

export const fetchBlogs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchBlogById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
