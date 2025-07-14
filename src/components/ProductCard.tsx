import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Quick view functionality
    console.log('Quick view:', product.id);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Quick add functionality
    console.log('Quick add:', product.id);
  };

  return (
    <div 
      className="group relative bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer transform hover:-translate-y-1"
      onClick={handleProductClick}
    >
      {/* Product Image with Enhanced Zoom Effect */}
      <div className="relative overflow-hidden aspect-square bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        
        {/* Discount Badge */}
        {product.originalPrice && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold shadow-lg">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </div>
        )}

        {/* Action Buttons - Enhanced */}
        <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <button
            onClick={handleWishlist}
            className={`p-2 rounded-full transition-all duration-200 shadow-lg ${
              isWishlisted 
                ? 'bg-red-500 text-white' 
                : 'bg-white/90 text-gray-600 hover:bg-red-500 hover:text-white'
            }`}
          >
            <Heart size={14} fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
          
          <button
            onClick={handleQuickView}
            className="p-2 rounded-full bg-white/90 text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-200 shadow-lg"
          >
            <Eye size={14} />
          </button>
        </div>

        {/* Quick Add Button - Enhanced Animation */}
        <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button 
            onClick={handleQuickAdd}
            className="w-full bg-gray-900 hover:bg-black text-white py-2 px-3 rounded-md text-xs font-semibold flex items-center justify-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <ShoppingCart size={14} />
            <span>Quick Add</span>
          </button>
        </div>

        {/* Overlay Effect */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Product Info - Enhanced Typography */}
      <div className="p-3">
        <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 leading-tight group-hover:text-amber-600 transition-colors">
          {product.name}
        </h3>
        
        {/* Rating - Enhanced */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
            <span className="text-xs text-gray-600 ml-2 font-medium">{product.rating}</span>
            <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
          </div>
        </div>

        {/* Price - Enhanced */}
        <div className="flex items-center space-x-2">
          <span className="text-base font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;