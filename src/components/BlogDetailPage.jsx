import { useParams } from 'react-router-dom';

const BlogDetailPage = ({ blogPosts }) => {
  const { slug } = useParams();
  const blog = blogPosts.find(post => post.slug === slug);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="mt-20">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} loading="lazy" />
      <p>{blog.date}</p>
      <p>{blog.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default BlogDetailPage;
