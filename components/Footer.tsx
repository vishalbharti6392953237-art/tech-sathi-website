import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../constants';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">{APP_NAME}</h3>
            <p className="text-gray-400 text-sm mb-4">
              Bharat ka apna Tech & Education blog. Seekhiye nayi skills aur rahiye updated.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

           {/* Column 3: Categories */}
           <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Topics</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/category/tech-ai" className="hover:text-blue-400 transition-colors">Technology & AI</Link></li>
              <li><Link to="/category/courses" className="hover:text-blue-400 transition-colors">Free Courses</Link></li>
              <li><Link to="/category/earning" className="hover:text-blue-400 transition-colors">Online Earning</Link></li>
              <li><Link to="/category/gk" className="hover:text-blue-400 transition-colors">GK & News</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Subscribe</h4>
            <p className="text-gray-400 text-sm mb-4">Latest updates apne email par paayein.</p>
            <div className="flex">
              <input type="email" placeholder="Email Address" className="w-full px-3 py-2 text-gray-900 rounded-l-md focus:outline-none" />
              <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved. Made for India.
        </div>
      </div>
    </footer>
  );
};

export default Footer;