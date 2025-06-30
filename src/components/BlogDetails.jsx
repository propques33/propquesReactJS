import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { getBlogs, getBlogBySlug } from '../utils/api';
import styles from './BlogDetail.module.css';
import { Clock, ChevronDown, ArrowRight, Share2 } from 'lucide-react';
// import {Navbar as Nav} from '../components/Nav';
import Footer from '../components/Footer';
import l1 from '/logo.png';

const AUTHOR = {
  name: 'Adarsh Mohan Dixit',
  role: 'Contributing Writer',
  img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  bio: `Adarsh Mohan Dixit is a Flexible Workspace Specialist focused on helping asset owners convert properties into profitable coworking spaces through smart design, operations, and monetization strategies.`
};

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
        <span>{faq.question}</span>
        <ChevronDown size={22} className={isOpen ? styles.faqIconOpen : styles.faqIcon} />
      </button>
      {isOpen && <div className={styles.faqAnswer}>{faq.answer}</div>}
    </div>
  );
};

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [otherBlogs, setOtherBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showShareDropdown, setShowShareDropdown] = useState(false);
  const [showCopyToast, setShowCopyToast] = useState(false);
  const mainRef = useRef();
  const blogUrl = typeof window !== 'undefined' ? window.location.href : '';

  useEffect(() => {
    const fetchBlog = async () => {
      window.scrollTo(0, 0);
      setLoading(true);
      try {
        const data = await getBlogBySlug(slug);
        setBlog(data);
        const related = await getBlogs().then(blogs => blogs.filter(b => b.urlSlug !== slug).slice(0, 3));
        setOtherBlogs(related);
      } catch (err) {
        setError('Failed to load blog content.');
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  const handleShare = useCallback(() => {
    if (navigator.share) {
      navigator.share({
        title: blog?.pageTitle || 'FindUrSpace Blog',
        text: blog?.metaDescription || '',
        url: blogUrl,
      });
    } else {
      setShowShareDropdown((v) => !v);
    }
  }, [blog, blogUrl]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(blogUrl);
    setShowCopyToast(true);
    setTimeout(() => setShowCopyToast(false), 1800);
    setShowShareDropdown(false);
  };

  // Scroll progress bar logic
  useEffect(() => {
    const handleScroll = () => {
      const main = mainRef.current;
      if (!main) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatDate = (isoDate) => {
    if (!isoDate) return '';
    const date = new Date(isoDate);
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return `Published on ${date.toLocaleDateString("en-US", options)}`;
  };

  // Share dropdown item style
  const shareItemStyle = {
    display: 'block',
    padding: '0.65rem 1.2rem',
    color: '#1a202c',
    fontSize: '1rem',
    textDecoration: 'none',
    cursor: 'pointer',
    borderBottom: '1px solid #f3f4f6',
    background: 'none',
  };

  if (loading) return (
    <div className="flex justify-center items-center h-screen" style={{background: '#f8fafc'}}>
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
  if (error) return <div className={styles.errorState}>{error}</div>;
  if (!blog) return null;

  return (
    <div className={styles.blogDetailRoot}>
      <Helmet>
        <title>{blog.metaTitle || blog.pageTitle}</title>
        <meta name="description" content={blog.metaDescription || ''} />
        <meta property="og:title" content={blog.metaTitle || blog.pageTitle} />
        <meta property="og:description" content={blog.metaDescription || ''} />
        <meta property="og:image" content={blog.featuredImage} />
        {blog.canonicalUrl && <link rel="canonical" href={blog.canonicalUrl} />}
        {blog.ampCompatibility && <link rel="amphtml" href={blog.canonicalUrl?.replace('https://', 'https://amp.') || ''} />}
        {/* Inject all schemaMarkup as JSON-LD */}
        {Array.isArray(blog.schemaMarkup) && blog.schemaMarkup.map((schema, idx) => (
          <script key={idx} type="application/ld+json">{schema}</script>
        ))}
      </Helmet>

      {/* <Nav /> */}
      
      <main ref={mainRef}>
        <section className={styles.heroSection}>
          {blog.featuredImage && (
            <img
              src={blog.featuredImage}
              alt={blog.pageTitle}
              className={styles.heroImage}
            />
          )}
        </section>

        <div className={styles.contentMain}>
          <div className={styles.heroCard}>
            <div className={styles.publishedOnContainer}>
              <span className={styles.publishedOn}>{formatDate(blog.createdAt)}</span>
              <hr className={styles.divider} />
            </div>
            <h1 className={styles.heroTitle}>{blog.pageTitle}</h1>
            
            <div className={styles.heroMeta} style={{position: 'relative'}}>
              <div className={styles.metaAuthorBlock}>
                <div className={styles.authorIcon}>
                  <div className={styles.authorIconInner}></div>
                </div>
                <div className={styles.authorText}>
                  <span className={styles.authorName}>{AUTHOR.name}</span>
                  <span className={styles.authorRole}>{AUTHOR.role}</span>
                </div>
              </div>
              <div className={styles.metaInfoBlock}>
                <div className={styles.metaItem}>
                  <Clock size={16} />
                  <span>{blog.read_time || 3} min read</span>
                </div>
                {/* Share Button */}
                <div style={{ position: 'relative', display: 'inline-block', marginLeft: '0.5rem' }}>
                  <button
                    onClick={handleShare}
                    aria-label="Share this blog"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: '#2563eb',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 8px #2563eb33',
                      color: '#fff',
                      cursor: 'pointer',
                      transition: 'transform 0.18s, background 0.18s',
                      outline: 'none',
                      fontSize: 0,
                    }}
                    onMouseDown={e => e.preventDefault()}
                    onBlur={() => setTimeout(() => setShowShareDropdown(false), 200)}
                    tabIndex={0}
                    className="blog-share-btn"
                  >
                    <Share2 size={22} strokeWidth={2.2} color="#fff" style={{display: 'block'}} />
                  </button>
                  {/* Dropdown with fade/slide animation */}
                  <div style={{
                    position: 'absolute',
                    right: 0,
                    top: '2.8rem',
                    zIndex: 100,
                    pointerEvents: showShareDropdown ? 'auto' : 'none',
                    opacity: showShareDropdown ? 1 : 0,
                    transform: showShareDropdown ? 'translateY(0)' : 'translateY(12px)',
                    transition: 'opacity 0.22s, transform 0.22s',
                  }}>
                    {showShareDropdown && (
                      <>
                        <div style={{
                          position: 'absolute',
                          top: -10,
                          right: 18,
                          width: 0,
                          height: 0,
                          borderLeft: '8px solid transparent',
                          borderRight: '8px solid transparent',
                          borderBottom: '10px solid #fff',
                          filter: 'drop-shadow(0 2px 4px #2563eb22)',
                        }} />
                        <div style={{
                          background: '#fff',
                          border: '1px solid #e5e7eb',
                          borderRadius: '0.75rem',
                          boxShadow: '0 4px 16px #2563eb22',
                          minWidth: '180px',
                          padding: '0.5rem 0',
                          display: 'flex',
                          flexDirection: 'column',
                        }}>
                          <a href={`https://wa.me/?text=${encodeURIComponent(blog?.pageTitle + ' ' + blogUrl)}`} target="_blank" rel="noopener noreferrer" style={{...shareItemStyle, fontWeight: 500}}>
                            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" alt="WhatsApp" style={{width: 20, height: 20, marginRight: 10, verticalAlign: 'middle'}} /> WhatsApp
                          </a>
                          <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(blogUrl)}&title=${encodeURIComponent(blog?.pageTitle)}`} target="_blank" rel="noopener noreferrer" style={{...shareItemStyle, fontWeight: 500}}>
                            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" style={{width: 20, height: 20, marginRight: 10, verticalAlign: 'middle'}} /> LinkedIn
                          </a>
                          <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(blogUrl)}&text=${encodeURIComponent(blog?.pageTitle)}`} target="_blank" rel="noopener noreferrer" style={{...shareItemStyle, fontWeight: 500}}>
                            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="Twitter/X" style={{width: 20, height: 20, marginRight: 10, verticalAlign: 'middle'}} /> Twitter/X
                          </a>
                          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`} target="_blank" rel="noopener noreferrer" style={{...shareItemStyle, fontWeight: 500}}>
                            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" style={{width: 20, height: 20, marginRight: 10, verticalAlign: 'middle'}} /> Facebook
                          </a>
                          <button onClick={handleCopyLink} style={{...shareItemStyle, border: 'none', background: 'none', width: '100%', textAlign: 'left', cursor: 'pointer', fontWeight: 500}}>
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#2563eb" style={{marginRight: 10, verticalAlign: 'middle'}}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17l4 4 4-4m-4-5v9" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7" /></svg> Copy Link
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                  {/* Toast for copy */}
                  {showCopyToast && (
                    <div style={{
                      position: 'fixed',
                      left: '50%',
                      bottom: '2.5rem',
                      transform: 'translateX(-50%)',
                      background: '#2563eb',
                      color: '#fff',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '1rem',
                      fontWeight: 600,
                      fontSize: '1rem',
                      zIndex: 9999,
                      boxShadow: '0 4px 16px #2563eb33',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}>
                      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#fff"><circle cx="12" cy="12" r="12" fill="#22c55e"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      Link copied!
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <article className={styles.articleWrapper}>
            <div
              className={styles.contentSection}
              dangerouslySetInnerHTML={{
                __html: blog.contentBody
                  ? blog.contentBody.replace(/<img ([^>]*?)>/g, (match, attrs) => {
                      // If alt is present, leave as is, else add alt
                      if (/alt=/.test(attrs)) return `<img ${attrs}>`;
                      const alt = blog.pageTitle ? blog.pageTitle.replace(/"/g, '&quot;') : 'Blog image';
                      return `<img ${attrs} alt=\"${alt}\">`;
                    })
                  : ''
              }}
            />
            
            <hr className={styles.sectionDivider} />

            <section className={styles.authorSectionNew}>
              <div className={styles.heroCard} style={{display: 'flex', alignItems: 'center', gap: '2rem', margin: 0, marginTop: '0.5rem', maxWidth: '900px'}}>
                <div style={{flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: '50%', border: '2.5px solid #fde047', width: '64px', height: '64px', boxShadow: '0 2px 8px #fde04722'}}>
                  <img src={l1} alt="Findurspace Logo" style={{width: '40px', height: '40px', objectFit: 'contain', display: 'block'}} />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.15rem'}}>
                  <div style={{fontSize: '0.95rem', fontWeight: 700, color: '#2563eb', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.1rem'}}>WRITTEN BY</div>
                  <div style={{fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: 700, color: '#1a202c', marginBottom: '0.2rem'}}>{AUTHOR.name}</div>
                  <div style={{fontSize: '1.05rem', color: '#374151', fontFamily: 'Inter, sans-serif', lineHeight: 1.6, marginBottom: '0.1rem'}}>{AUTHOR.bio}</div>
                </div>
              </div>
            </section>
          </article>
        </div>

        {blog.faqBlock?.length > 0 && (
          <section className={styles.faqSection}>
            <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
            <p className={styles.faqSubtitle}>
              Answers to common questions about this blog and coworking space insights
            </p>
            <div className={styles.faqList}>
              {blog.faqBlock.map((faq, idx) => (
                <FaqItem key={idx} faq={faq} />
              ))}
            </div>
          </section>
        )}

        {otherBlogs?.length > 0 && (
          <section className={styles.relatedSection}>
            <h2 className={styles.faqTitle}>Other Similar Blogs</h2>
            <div className={styles.relatedGrid}>
              {otherBlogs.map((blog, index) => (
                <article
                  key={blog.urlSlug}
                  className={styles.blogCard + ' group relative flex flex-col overflow-hidden'}
                  style={{ boxShadow: '0 2px 16px 0 rgba(37,99,235,0.06)' }}
                >
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
                        <span>{new Date(blog.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{blog.read_time || 3} min read</span>
                      </div>
                    </div>

                    {/* Category Badge */}
                    {blog.category && (
                      <div className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
                        {blog.category}
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {blog.pageTitle}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {blog.metaDescription || 'Discover insights and tips about real estate and coworking spaces.'}
                    </p>

                    {/* Read More Link */}
                    <Link
                      to={`/blog/${blog.urlSlug}`}
                      className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors group/link mt-auto"
                    >
                      <span>Read Article</span>
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform text-blue-600" />
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Scroll Progress Bar at Bottom */}
      <div style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100vw',
        height: '12px',
        background: 'rgba(226,232,240,0.85)',
        zIndex: 9999,
        boxShadow: '0 0 8px 2px #2563eb33',
        borderTop: '1.5px solid #e5e7eb',
        borderRadius: '8px 8px 0 0',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>
        <div style={{
          width: `${scrollProgress}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #2563eb 0%, #fde047 100%)',
          transition: 'width 0.18s',
          borderRadius: '8px 8px 0 0',
          boxShadow: '0 0 8px 2px #fde04755',
        }} />
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          style={{
            position: 'fixed',
            right: '2rem',
            bottom: '3.5rem',
            zIndex: 101,
            background: '#2563eb',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            boxShadow: '0 4px 16px #2563eb33',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '1.5rem',
            transition: 'background 0.18s',
          }}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default BlogDetails;
