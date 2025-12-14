import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { INITIAL_POSTS, CATEGORIES } from '../constants';
import { generateBlogContent } from '../services/geminiService';
import { BlogPost, Category } from '../types';
import { Calendar, User, Clock, Share2, MessageCircle } from 'lucide-react';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  // Find post metadata and load content
  useEffect(() => {
    const foundPost = INITIAL_POSTS.find(p => p.id === id);
    if (foundPost) {
      setPost(foundPost);
      // Simulate checking if content exists, otherwise generate it
      setLoading(true);
      generateBlogContent(foundPost.title, foundPost.category)
        .then(generatedText => {
            setContent(generatedText);
            setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  if (!post && !loading) {
    return <div className="p-10 text-center">Post not found</div>;
  }

  const category: Category | undefined = CATEGORIES.find(c => c.id === post?.category);

  return (
    <div className="bg-white min-h-screen">
      
      {/* Article Header */}
      {post && (
        <div className="bg-gray-50 border-b border-gray-200 py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="mb-4">
               {category && (
                <Link to={`/category/${category.id}`} className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {category.hindiName}
                </Link>
               )}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-sm text-gray-500 space-x-6">
              <span className="flex items-center gap-2"><User size={16} /> Tech Saathi Team</span>
              <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
              <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime}</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        
        {/* Featured Image */}
        {post && (
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-auto rounded-xl shadow-md mb-10 object-cover"
          />
        )}

        {/* AI Loading State */}
        {loading ? (
          <div className="space-y-4 animate-pulse">
             <div className="h-4 bg-gray-200 rounded w-3/4"></div>
             <div className="h-4 bg-gray-200 rounded w-full"></div>
             <div className="h-4 bg-gray-200 rounded w-5/6"></div>
             <div className="h-32 bg-gray-100 rounded w-full my-6"></div>
             <div className="h-4 bg-gray-200 rounded w-full"></div>
             <div className="h-4 bg-gray-200 rounded w-4/5"></div>
             <p className="text-center text-gray-500 mt-4 text-sm font-medium">
               🤖 AI is writing this article for you in Hindi...
             </p>
          </div>
        ) : (
          <article className="prose prose-lg prose-blue max-w-none text-gray-800">
             {/* Render Markdown Content */}
             <ReactMarkdown
               components={{
                 h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-blue-500 pl-4" {...props} />,
                 h3: ({node, ...props}) => <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3" {...props} />,
                 p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
                 ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4 space-y-2 bg-gray-50 p-6 rounded-lg" {...props} />,
                 li: ({node, ...props}) => <li className="text-gray-700" {...props} />,
                 strong: ({node, ...props}) => <strong className="font-bold text-gray-900" {...props} />
               }}
             >
               {content}
             </ReactMarkdown>
          </article>
        )}

        {/* Share & Actions */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
            <Share2 size={18} /> WhatsApp Share
          </button>
          <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            <Share2 size={18} /> Share on FB
          </button>
        </div>

      </div>
    </div>
  );
};

export default BlogPostPage;