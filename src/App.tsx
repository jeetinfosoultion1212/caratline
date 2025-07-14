import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';

function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <ProductGrid />
      <Features />
      <Newsletter />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;