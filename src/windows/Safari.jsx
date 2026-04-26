import { useState, useEffect, useCallback } from 'react';
import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  PanelLeft,
  Plus,
  Share,
  ShieldHalf,
} from 'lucide-react';

const Safari = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [allBlogPosts, setAllBlogPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          'https://myblog-backend-2y6m.onrender.com/api/blogs/',
        );
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        // Sort by createdAt and take only 3 most recent for initial display
        const sortedPosts = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
        setAllBlogPosts(sortedPosts);
        setBlogPosts(sortedPosts.slice(0, 3));
        setFilteredPosts(sortedPosts.slice(0, 3));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Debounced search function - searches through all posts, not just the 3 displayed
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredPosts(blogPosts);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const debounceTimer = setTimeout(() => {
      const query = searchQuery.toLowerCase().trim();
      const filtered = allBlogPosts.filter((post) => {
        const titleMatch = post.title?.toLowerCase().includes(query) || false;
        const excerptMatch =
          post.excerpt?.toLowerCase().includes(query) || false;
        const contentMatch =
          post.content?.toLowerCase().includes(query) || false;
        return titleMatch || excerptMatch || contentMatch;
      });
      setFilteredPosts(filtered);
      setIsSearching(false);
    }, 300); // Reduced to 300ms for faster response

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, allBlogPosts, blogPosts]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div id='window-header'>
        <WindowControls target='safari' />

        <PanelLeft className='ml-10 icon' />
        <div className='item-center flex ml-5 gap-1'>
          <ChevronLeft className='icon' />
          <ChevronRight className='icon' />
        </div>

        <div className='flex-1 flex-center gap-3'>
          <div className='search'>
            <ShieldHalf className='icon' />

            <input
              type='text'
              placeholder='Search for project...'
              className='flex-1'
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className='flex item-center gap-5'>
          <Share className='icon' />
          <Plus className='icon' />
          <Copy className='icon' />
        </div>
      </div>

      <div className='blog window-content'>
        <h2>My Blog</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : isSearching ? (
          <p className='text-[#bcc8d1]'>Searching...</p>
        ) : filteredPosts.length === 0 ? (
          <p className='text-[#bcc8d1]'>
            No blog posts found matching your search.
          </p>
        ) : (
          filteredPosts.map(
            ({ id, title, createdAt, url, slug, featuredImage }) => (
              <div key={id} className='blog-post'>
                <div className='col-span-2'>
                  {featuredImage ? (
                    <img
                      src={featuredImage}
                      alt={title}
                      loading='eager'
                      decoding='async'
                      width='200'
                      height='200'
                      className='optimized-image'
                      style={{ opacity: 0, transition: 'opacity 0.3s ease-in' }}
                      onLoad={(e) => {
                        e.target.style.opacity = 1;
                      }}
                      onError={(e) => {
                        e.target.src =
                          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23171f33" width="200" height="200"/%3E%3Ctext fill="%23bcc8d1" font-family="sans-serif" font-size="14" x="50%25" y="50%25" text-anchor="middle"%3ENo Image%3C/text%3E%3C/svg%3E';
                        e.target.style.opacity = 1;
                        e.target.onerror = null;
                      }}
                    />
                  ) : (
                    <div className='placeholder-image'>
                      <span className='text-[#bcc8d1] text-sm'>
                        No image available
                      </span>
                    </div>
                  )}
                </div>

                <div className='content'>
                  <p>
                    {createdAt
                      ? new Date(createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })
                      : 'No date'}
                  </p>
                  <h3>{title}</h3>
                  <a
                    href={
                      slug
                        ? `https://my-blog-iota-sandy.vercel.app/blogs/${slug}`
                        : 'https://my-blog-iota-sandy.vercel.app/'
                    }
                    target='_blank'
                    rel='noopener noreferrer'
                    className='blog-link'
                  >
                    Check out our full post <MoveRight className='icon-hover' />
                  </a>
                </div>
              </div>
            ),
          )
        )}
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, 'safari');
export default SafariWindow;
