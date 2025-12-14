import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost, Category } from '../types';
import { CATEGORIES } from '../constants';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface PostCardProps {
  post: BlogPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const category: Category | undefined = CATEGORIES.find(c => c.id === post.category);

  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <Link to={`/post/${post.id}`} className="block relative overflow-hidden group">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        {category && (
          <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {category.hindiName}
          </span>
        )}
      </Link>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
          <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
          <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
        </div>
        
        <Link to={`/post/${post.id}`} className="block mb-2">
          <h2 className="text-xl font-bold text-gray-900 leading-snug hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <Link to={`/post/${post.id}`} className="inline-flex items-center text-blue-600 font-semibold text-sm hover:underline">
            Read More <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostCard;