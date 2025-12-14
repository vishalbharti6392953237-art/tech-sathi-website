import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES, INITIAL_POSTS } from '../constants';
import PostCard from '../components/PostCard';

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const category = CATEGORIES.find(c => c.id === id);
  const posts = INITIAL_POSTS.filter(p => p.category === id);

  if (!category) {
    return <div className="p-10 text-center text-xl">Category not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Header */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8 text-center md:text-left border border-gray-100">
           <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-2 inline-block">
             Topic
           </span>
           <h1 className="text-3xl font-bold text-gray-900 mb-2">{category.name} ({category.hindiName})</h1>
           <p className="text-gray-600 max-w-2xl">{category.description}</p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.length > 0 ? (
            posts.map(post => <PostCard key={post.id} post={post} />)
          ) : (
            <div className="col-span-full py-12 text-center text-gray-500">
              Is category mein abhi koi posts nahi hain. Jaldi hi update hoga!
            </div>
          )}
        </div>

        {/* Content Plan Placeholder (Deliverable requirement) */}
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Upcoming Content in {category.name}</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Advanced guides and tutorials coming next week.</li>
            <li>Expert interviews and case studies.</li>
            <li>Free downloadable resources (PDFs).</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default CategoryPage;