import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Filter, Search } from 'lucide-react';

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      price: 29999,
      originalPrice: 34999,
      image: "https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      category: "Rings",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Gold Pearl Necklace",
      price: 12999,
      image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      category: "Necklaces",
      rating: 4.6,
      reviews: 89
    },
    {
      id: 3,
      name: "Emerald Pendant",
      price: 18999,
      originalPrice: 22999,
      image: "https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      category: "Necklaces",
      rating: 4.7,
      reviews: 67
    },
    {
      id: 4,
      name: "Ruby Tennis Bracelet",
      price: 34999,
      image: "https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      category: "Bracelets",
      rating: 4.9,
      reviews: 145
    },
    {
      id: 5,
      name: "Sapphire Stud Earrings",
      price: 8999,
      originalPrice: 11999,
      image: "https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      category: "Earrings",
      rating: 4.5,
      reviews: 92
    },
    {
      id: 6,
      name: "Platinum Wedding Band",
      price: 15999,
      image: "https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      category: "Rings",
      rating: 4.8,
      reviews: 156
    },
    {
      id: 7,
      name: "Diamond Hoop Earrings",
      price: 21999,
      image: "https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      category: "Earrings",
      rating: 4.7,
      reviews: 78
    },
    {
      id: 8,
      name: "Gold Chain Bracelet",
      price: 5999,
      originalPrice: 7999,
      image: "https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      category: "Bracelets",
      rating: 4.4,
      reviews: 134
    }
  ];

  const categories = ['All', 'New In', 'Rings', 'Necklaces', 'Bracelets', 'Earrings'];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-50 rounded-full mb-6">
            <span className="text-amber-600 text-sm font-medium">✨ Handpicked for You</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-amber-500">Collection</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Discover our handpicked selection of exquisite jewelry pieces, each crafted with precision, passion, and uncompromising attention to detail.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12 bg-gray-50 p-6 rounded-2xl">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white text-gray-900 placeholder-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Category Filter */}
            <select
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white min-w-[140px] appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzZCNzI4MCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K')] bg-no-repeat bg-right-4 bg-center pr-10 text-gray-700"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Sort Filter */}
            <select
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white min-w-[140px] appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzZCNzI4MCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K')] bg-no-repeat bg-right-4 bg-center pr-10 text-gray-700"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;