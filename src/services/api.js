import axios from "axios";

const API_URL = "https://propques-backend-jsqqh.ondigitalocean.app/blogs"; // Update if hosted on a server

export const fetchBlogs = async (page = 1, limit = 10) => {
  const response = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
  return response.data;
};

export const fetchBlogById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createBlog = async (blogData) => {
  const response = await axios.post(API_URL, blogData);
  return response.data;
};

export const toggleVisibility = async (id, visibility) => {
  const response = await axios.patch(`${API_URL}/${id}/visibility`, {
    visibility,
  });
  return response.data;
};
