import React from 'react';
import { Shield, Truck, Award, RefreshCw } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "All our jewelry comes with a comprehensive lifetime warranty"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Complimentary shipping on all orders over $500"
    },
    {
      icon: Award,
      title: "Certified Quality",
      description: "Every piece is certified by international quality standards"
    },
    {
      icon: RefreshCw,
      title: "30-Day Returns",
      description: "Not satisfied? Return within 30 days for a full refund"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-amber-500">CaratLine</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience luxury jewelry shopping with unmatched quality and service
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl mb-6 group-hover:shadow-lg transition-all duration-300">
                <feature.icon className="w-10 h-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;