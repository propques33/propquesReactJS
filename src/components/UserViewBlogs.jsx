import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Search, Filter, Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight, BookOpen, TrendingUp, Star } from 'lucide-react';
import { getBlogs } from '../utils/api';
// import {Navbar as Nav} from './Nav';
import styles from './Blog.module.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('latest');
  const blogsPerPage = 9;
  const [toast, setToast] = useState(null);
  const resultsRef = useRef(null);
  const navigate = useNavigate();

  // Categories for filtering
  const categories = [
    'All',
    'Asset Playbook or Leasing Intelligence',
    'The Deal Room',
    'Space Market Pulse',
    'Design Logic',
    'The Living Office or Greenprint',
    'PropTech Insights',
    'Propques Labs',
    'Monetize & Manage',
    'PropTech & Analytics'
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // getBlogs uses sessionStorage caching for 5 minutes
        const blogsData = await getBlogs();
        setBlogs(blogsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Toast auto-dismiss
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
  };

  // Filter and search blogs
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.pageTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.metaDescription?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' ||
      (blog.category && blog.category.toLowerCase() === selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  // Sort blogs
  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    if (sortBy === 'latest') {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    } else if (sortBy === 'oldest') {
      return new Date(a.updatedAt) - new Date(b.updatedAt);
    } else if (sortBy === 'title') {
      return a.pageTitle?.localeCompare(b.pageTitle);
    }
    return 0;
  });

  // Get the latest 3 blogs for featured section
  const featuredBlogs = sortedBlogs.slice(0, 3);
  const regularBlogs = sortedBlogs.slice(3);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle search button click
  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) {
      setToast('Please enter a search term!');
      return;
    }
    setToast(`Searching for: "${searchQuery}"`);
    setTimeout(() => {
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 400);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* <Nav /> */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          <div className="animate-pulse space-y-8">
            {/* Hero Section Shimmer */}
            <div className="text-center space-y-4">
              <div className="h-4 bg-gray-200 rounded w-32 mx-auto"></div>
              <div className="h-12 bg-gray-200 rounded w-3/4 mx-auto"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
            
            {/* Search Bar Shimmer */}
            <div className="max-w-2xl mx-auto">
              <div className="h-12 bg-gray-200 rounded-lg"></div>
            </div>

            {/* Blog Grid Shimmer */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-6 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
  return (
      <div className="min-h-screen bg-gray-50">
        {/* <Nav /> */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          <div className="text-center">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-red-800 mb-4">Error Loading Blogs</h2>
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Propques Blog – Tips, Trends, and Coworking Insights</title>
        <meta name="description" content="Read expert blogs on coworking trends, office management tips, and space recommendations from FindUrSpace. Stay updated!" />
        <meta property="og:title" content="FindUrSpace Blog – Tips, Trends, and Coworking Insights" />
        <meta property="og:description" content="Read expert blogs on coworking trends, office management tips, and space recommendations from FindUrSpace. Stay updated!" />
        <meta name="twitter:title" content="FindUrSpace Blog – Tips, Trends, and Coworking Insights" />
        <meta name="twitter:description" content="Read expert blogs on coworking trends, office management tips, and space recommendations from FindUrSpace. Stay updated!" />
      </Helmet>
      
      {/* <Nav /> */}
      
      {/* Hidden H1 for SEO */}
      <h1 className="sr-only hidden">Propques Blog - Discover Coworking Trends and Tips</h1>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden flex items-center justify-center min-h-[60vh] w-full" style={{height: '60vh'}}>
        {/* Subtle animated background */}
        <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100 opacity-70 pointer-events-none" style={{backgroundSize: '300% 300%'}}></div>
        <div className="relative z-10 flex flex-col items-center w-full max-w-3xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-2 tracking-tight w-full" style={{letterSpacing: '-0.02em'}}>
            Cowork. Connect. Conquer.
          </h1>
          {/* Thin yellow accent bar */}
          <div className="h-1 w-16 bg-yellow-300 rounded-full mb-4 mx-auto"></div>
          <p className="text-base md:text-lg text-gray-700 text-center mb-8 max-w-2xl font-medium mx-auto">
            Your daily dose of workspace wisdom.
          </p>
          <form className="w-full flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search workspace tips..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-5 py-3 rounded-lg border border-gray-200 shadow-sm focus:ring-2 focus:ring-yellow-300 text-base text-gray-900 placeholder-gray-400 transition-all bg-white/70 backdrop-blur"
            />
            <button
              className="bg-yellow-300 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-sm hover:bg-yellow-400 transition-colors text-base border border-yellow-300"
              style={{backdropFilter: 'blur(4px)'}}
              type="submit"
            >
              Explore
            </button>
          </form>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            

            {/* Filters */}
            <div className="flex flex-wrap gap-3 my-6">
              {categories.map(category => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                    }}
                    className={`px-5 py-2 rounded-full border text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Sort Filter */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="latest">Latest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Alphabetical</option>
              </select>
              <TrendingUp className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blogs Section (WeWork style) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-4 md:px-6 xl:px-0 py-8 md:py-12 animate-fade-in-up" style={{animationDelay: '0.1s', animationDuration: '0.8s', animationFillMode: 'both'}}>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-900">Featured blog posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Main featured blog */}
          {featuredBlogs[0] && (
            <Link to={`/blog/${featuredBlogs[0].urlSlug}`} className={`${styles['featured-blog-card']} md:col-span-2 flex flex-col justify-end min-h-[260px] sm:min-h-[320px] md:min-h-[400px]`}>
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img src={featuredBlogs[0].featuredImage} alt={featuredBlogs[0].pageTitle} className={styles['featured-blog-image']} />
              </div>
              {/* Small Featured badge */}
              <span className="absolute top-3 left-3 sm:top-5 sm:left-5 bg-yellow-300 text-blue-900 text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow">Featured</span>
              {/* Premium Info box */}
              <div className="absolute left-3 sm:left-5 bottom-3 sm:bottom-5 rounded-xl px-4 sm:px-6 py-3 sm:py-4 max-w-[90%] sm:max-w-[80%] shadow-lg backdrop-blur-md bg-yellow-100/80 border border-blue-100 flex flex-col gap-1" style={{boxShadow: '0 4px 24px 0 #bae6fd80'}}>
                <span className="inline-block rounded-lg px-2 sm:px-3 py-1 sm:py-2 mb-1 line-clamp-2">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg md:text-xl leading-tight line-clamp-2">{featuredBlogs[0].pageTitle}</h3>
                </span>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
                  <span className="text-xs text-blue-700 font-medium">{formatDate(featuredBlogs[0].updatedAt)}</span>
                </div>
              </div>
            </Link>
          )}
          {/* Two smaller featured blogs */}
          <div className="flex flex-col gap-6 md:gap-8">
            {featuredBlogs.slice(1).map((blog, idx) => (
              <Link to={`/blog/${blog.urlSlug}`} key={blog.urlSlug} className={`${styles['featured-blog-card']} flex flex-col justify-end min-h-[120px] sm:min-h-[180px] md:min-h-[200px]`}>
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img src={blog.featuredImage} alt={blog.pageTitle} className={styles['featured-blog-image']} />
                </div>
                {/* Premium Info box - compact for small cards */}
                <div className="absolute left-2 sm:left-4 bottom-2 sm:bottom-4 rounded-xl px-2 sm:px-4 py-1.5 sm:py-2 max-w-[90%] sm:max-w-[70%] shadow-lg backdrop-blur-md bg-yellow-100/70 border border-blue-100 flex flex-col gap-1" style={{boxShadow: '0 2px 12px 0 #bae6fd80'}}>
                  <span className="inline-block px-1.5 sm:px-2 py-0.5 sm:py-1 mb-0.5 line-clamp-2">
                    <h4 className="font-bold text-gray-900 text-xs sm:text-base leading-tight line-clamp-2">{blog.pageTitle}</h4>
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
                    <span className="text-xs text-blue-700 font-medium">{formatDate(blog.updatedAt)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section ref={resultsRef} className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {sortedBlogs.length === 0 ? (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="text-gray-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedBlogs.map((blog, index) => (
                  <Link
                    key={index}
                    to={`/blog/${blog.urlSlug}`}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-blue-100 hover:border-blue-200 border border-transparent transition-all duration-300 overflow-hidden group relative flex flex-col cursor-pointer"
                    style={{ boxShadow: '0 2px 16px 0 rgba(37,99,235,0.06)' }}
          >
                    {/* Workspace Type Tag */}
                    {blog.category && blog.category.toLowerCase() !== 'none' && (
                      <span
                        className="absolute top-3 left-3 z-20 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow"
                        style={{letterSpacing: '0.03em'}}
                      >
                        {blog.category}
                      </span>
                    )}
                    {/* Blog Image */}
            {blog.featuredImage && (
                      <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src={blog.featuredImage}
                alt={blog.pageTitle}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
                      </div>
                    )}

                    {/* Blog Content */}
                    <div className="p-6 flex flex-col flex-1">
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mr-1" />
                          <Calendar size={14} />
                          <span>{formatDate(blog.updatedAt)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{blog.read_time || 3} min read</span>
                        </div>
                      </div>

                

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {blog.pageTitle}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {blog.metaDescription || 'Discover insights and tips about real estate and coworking spaces.'}
              </p>

                      {/* Read More Link */}
                      <span className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors group/link mt-auto">
                        <span>Read Article</span>
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                          <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform text-blue-600" />
                        </span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section - Creative Coworking Style */}
      <section className="py-16 md:py-20 relative overflow-hidden animate-gradient bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100" style={{backgroundSize: '300% 300%'}}>
        <div className="max-w-3xl mx-auto px-4 md:px-8 relative z-10">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-blue-100">
            {/* Yellow accent circle */}
            <div className="absolute -top-8 left-8 w-16 h-16 bg-yellow-200 rounded-full z-0 blur-sm opacity-80" />
            {/* Illustration/Icon */}
            <div className="flex-shrink-0 z-10 flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 border-4 border-yellow-200 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" className="w-12 h-12 text-blue-500">
                <rect width="48" height="48" rx="24" fill="#e0e7ff" />
                <path d="M12 18l12 9 12-9" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="12" y="18" width="24" height="12" rx="3" stroke="#2563eb" strokeWidth="2.5"/>
              </svg>
            </div>
            {/* Content */}
            <div className="flex-1 z-10">
              <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-2 flex items-center gap-2">
                <span>Stay in the Loop!</span>
                <span className="inline-block w-3 h-3 rounded-full bg-yellow-300 newsletter-dot-pulse"></span>
              </h3>
              <p className="text-blue-700 text-base md:text-lg mb-6 max-w-xl">
                Get workspace tips and offers in your inbox.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 text-base font-semibold animate-fade-in">
          {toast}
        </div>
      )}
      </div>
  );
};

function NewsletterForm() {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState("");
  const [buttonBounce, setButtonBounce] = React.useState(false);
  const inputRef = React.useRef(null);
  const navigate = useNavigate();

  // Simulate API call
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Please enter a valid email address.");
      inputRef.current && inputRef.current.focus();
      return;
    }
    setLoading(true);
    setButtonBounce(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Failed to subscribe");
      setLoading(false);
      setSuccess(true);
      setButtonBounce(false);
      setEmail("");
      setTimeout(() => {
        setSuccess(false);
        navigate('/thankyou');
      }, 2500);
    } catch (err) {
      setLoading(false);
      setButtonBounce(false);
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <form className="newsletter-form w-full" onSubmit={handleSubmit}>
      <div className="newsletter-input-group flex w-full max-w-xl mx-auto">
        <div className="relative flex-1">
          <input
            ref={inputRef}
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={e => { setEmail(e.target.value); setError(""); }}
            className={`newsletter-input block w-full h-14 px-6 rounded-l-xl rounded-r-none border-2 focus:ring-0 bg-white text-base text-blue-900 font-semibold placeholder-blue-500 placeholder-opacity-80 transition-all ${error ? 'newsletter-input-error' : ''} ${success ? 'newsletter-input-success' : ''}`}
            disabled={loading || success}
            style={{borderRight: '1px solid #e5e7eb'}}
          />
          {error && <span className="absolute left-2 -bottom-6 text-xs text-red-500 animate-fade-in">{error}</span>}
          {success && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 animate-pop-in">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#bbf7d0"/><path d="M7 13l3 3 7-7" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          )}
        </div>
        <button
          type="submit"
          className={`newsletter-btn h-14 px-8 rounded-r-xl rounded-l-none bg-yellow-300 text-blue-900 font-bold shadow-sm border-0 flex items-center gap-2 transition-transform ${buttonBounce ? 'newsletter-btn-bounce' : ''}`}
          disabled={loading || success}
          onAnimationEnd={() => setButtonBounce(false)}
          style={{minWidth: '140px'}}
        >
          {loading ? (
            <span className="newsletter-btn-spinner"></span>
          ) : success ? (
            <span className="flex items-center gap-1">Subscribed!</span>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Subscribe
            </>
          )}
        </button>
        {success && <ConfettiEffect />}
      </div>
    </form>
  );
}

// Confetti animation (simple SVG burst)
function ConfettiEffect() {
  return (
    <span className="newsletter-confetti">
      {[...Array(12)].map((_, i) => (
        <span key={i} className={`newsletter-confetti-piece newsletter-confetti-piece-${i}`}></span>
      ))}
    </span>
  );
}

export default Blog; 
