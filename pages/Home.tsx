import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, INITIAL_POSTS } from '../constants';
import PostCard from '../components/PostCard';
import { TrendingUp, Award, Zap } from 'lucide-react';

const Home: React.FC = () => {
  const recentPosts = INITIAL_POSTS.slice(0, 6); // Show top 6

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Digital Duniya Mein <span className="text-blue-600">Aage Badhein</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Tech Saathi par seekhein latest Technology, Online Earning, aur Digital Skills wo bhi aasan Hindi mein.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/category/tech-ai" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
              Start Learning
            </Link>
            <Link to="/category/courses" className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all">
              Free Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Markers / Stats */}
      <section className="bg-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-white p-3 rounded-full shadow-sm text-blue-600 mb-3"><TrendingUp size={24} /></div>
              <h3 className="font-bold text-gray-900">Trending Topics</h3>
              <p className="text-sm text-gray-500">Daily Updates & News</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white p-3 rounded-full shadow-sm text-blue-600 mb-3"><Award size={24} /></div>
              <h3 className="font-bold text-gray-900">Verified Methods</h3>
              <p className="text-sm text-gray-500">Legit Online Earning</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white p-3 rounded-full shadow-sm text-blue-600 mb-3"><Zap size={24} /></div>
              <h3 className="font-bold text-gray-900">Easy Hindi</h3>
              <p className="text-sm text-gray-500">Simple Language</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Latest Posts */}
          <div className="lg:w-2/3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3">Latest Updates</h2>
              <Link to="/category/all" className="text-blue-600 text-sm font-semibold hover:underline">View All</Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Right Column: Sidebar (Categories & Ads) */}
          <aside className="lg:w-1/3 space-y-8">
            
            {/* Categories Widget */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Topics</h3>
              <div className="space-y-3">
                {CATEGORIES.map((cat) => (
                  <Link key={cat.id} to={`/category/${cat.id}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                    <span className="text-gray-700 font-medium group-hover:text-blue-600">{cat.hindiName}</span>
                    <span className="text-gray-400 text-xs">Explore</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Simulated Ad / Affiliate Space */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl p-6 text-white text-center shadow-lg">
              <p className="text-xs uppercase tracking-widest opacity-75 mb-2">Sponsored</p>
              <h3 className="text-xl font-bold mb-3">Best Hosting Deal 2025</h3>
              <p className="text-sm opacity-90 mb-4">Apni website banaye sirf ₹149/month mein. Free Domain included.</p>
              <button className="bg-white text-indigo-700 px-4 py-2 rounded-lg font-bold text-sm w-full hover:bg-gray-100 transition-colors">
                Get Deal Now
              </button>
            </div>

            {/* Newsletter Mini */}
            <div className="bg-gray-100 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Join Tech Saathi</h3>
              <p className="text-sm text-gray-600 mb-4">Weekly newsletter with tips & tricks.</p>
              <input type="text" placeholder="Your Email" className="w-full px-3 py-2 rounded border border-gray-300 mb-2 text-sm" />
              <button className="w-full bg-gray-900 text-white py-2 rounded text-sm font-medium hover:bg-black">Subscribe</button>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
};

export default Home;