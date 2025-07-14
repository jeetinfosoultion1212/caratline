import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-amber-400">Carat</span>Line
            </h3>
            <p className="text-gray-400 mb-4">
              Crafting timeless elegance since 1985. We create jewelry that tells your story and celebrates life's precious moments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-400 hover:bg-gray-700 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-400 hover:bg-gray-700 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-400 hover:bg-gray-700 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Collections</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Custom Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Warranty</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-amber-400" />
                <span className="text-gray-400">123 Jewelry Street, NYC 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-amber-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-amber-400" />
                <span className="text-gray-400">info@caratline.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CaratLine. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;