import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, BookOpen } from 'lucide-react';
import { APP_NAME, CATEGORIES } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <BookOpen size={24} />
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-tight">{APP_NAME}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`${isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'} transition-colors`}>
              Home
            </Link>
            <div className="relative group">
              <span className="cursor-pointer text-gray-600 hover:text-blue-600 flex items-center gap-1">
                Categories
              </span>
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  {CATEGORIES.map((cat) => (
                    <Link 
                      key={cat.id} 
                      to={`/category/${cat.id}`} 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/about" className={`${isActive('/about') ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'} transition-colors`}>
              About Us
            </Link>
            <Link to="/contact" className={`${isActive('/contact') ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'} transition-colors`}>
              Contact
            </Link>
          </nav>

          {/* Search & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button className="text-gray-500 hover:text-blue-600 hidden sm:block">
              <Search size={20} />
            </button>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">About Us</Link>
            <Link to="/contact" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Contact</Link>
            <div className="border-t border-gray-200 my-2"></div>
            <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Categories</p>
            {CATEGORIES.map((cat) => (
              <Link key={cat.id} to={`/category/${cat.id}`} onClick={toggleMenu} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 ml-2">
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;