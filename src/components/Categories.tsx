import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Rings",
      image: "https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      count: "250+ Designs"
    },
    {
      id: 2,
      name: "Necklaces",
      image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      count: "180+ Designs"
    },
    {
      id: 3,
      name: "Earrings",
      image: "https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      count: "320+ Designs"
    },
    {
      id: 4,
      name: "Bracelets",
      image: "https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      count: "150+ Designs"
    },
    {
      id: 5,
      name: "Pendants",
      image: "https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      count: "200+ Designs"
    },
    {
      id: 6,
      name: "Chains",
      image: "https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      count: "120+ Designs"
    },
    {
      id: 7,
      name: "Bangles",
      image: "https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      count: "90+ Designs"
    },
    {
      id: 8,
      name: "Watches",
      image: "https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      count: "75+ Designs"
    }
  ];

  const scrollLeft = () => {
    const container = document.getElementById('categories-container');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('categories-container');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-amber-50 rounded-full mb-4">
              <span className="text-amber-600 text-sm font-semibold">✨ Shop by Category</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Explore Our <span className="text-amber-500">Collections</span>
            </h2>
          </div>
          
          {/* Navigation Arrows - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-50 border border-gray-200"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-50 border border-gray-200"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Horizontal Categories Container */}
        <div className="relative">
          <div
            id="categories-container"
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitScrollbar: { display: 'none' }
            }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex-shrink-0 group cursor-pointer text-center transform hover:-translate-y-2 transition-all duration-300"
              >
                {/* Round Image Container */}
                <div className="relative mb-4 mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-amber-100 to-amber-50 p-1 group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ArrowRight className="text-white" size={20} />
                  </div>
                </div>

                {/* Category Info */}
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1 group-hover:text-amber-600 transition-colors whitespace-nowrap">
                  {category.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm whitespace-nowrap">{category.count}</p>
              </div>
            ))}
          </div>

          {/* Gradient Overlays for scroll indication */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center px-6 py-3 bg-gray-900 hover:bg-black text-white rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <span>View All Categories</span>
            <ArrowRight className="ml-2" size={18} />
          </button>
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Categories;