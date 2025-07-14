import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, User, Heart, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              <span className="text-amber-500">Carat</span>Line
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['New In', 'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Gifts'].map((item) => (
              <div key={item} className="relative group">
                <a 
                  href="#" 
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-amber-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  <span>{item}</span>
                  {item !== 'New In' && item !== 'Gifts' && <ChevronDown size={14} />}
                </a>
                {/* Dropdown indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></div>
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`p-2 rounded-full transition-all hover:bg-black/10 ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
            }`}>
              <Search size={20} />
            </button>
            <button className={`p-2 rounded-full transition-all hover:bg-black/10 ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
            }`}>
              <Heart size={20} />
            </button>
            <button className={`p-2 rounded-full transition-all hover:bg-black/10 ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
            }`}>
              <User size={20} />
            </button>
            <button className={`p-2 rounded-full transition-all hover:bg-black/10 relative ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
            }`}>
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                3
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-full transition-all ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-4 py-6 space-y-4">
              {['New In', 'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Gifts'].map((item) => (
                <a key={item} href="#" className="block text-gray-700 hover:text-amber-500 font-medium">
                  {item}
                </a>
              ))}
            </div>
            <div className="px-4 py-4 border-t bg-gray-50 flex items-center justify-around">
              <button className="p-3 text-gray-600 hover:text-amber-500">
                <Search size={22} />
              </button>
              <button className="p-3 text-gray-600 hover:text-amber-500">
                <Heart size={22} />
              </button>
              <button className="p-3 text-gray-600 hover:text-amber-500">
                <User size={22} />
              </button>
              <button className="p-3 text-gray-600 hover:text-amber-500 relative">
                <ShoppingBag size={22} />
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;