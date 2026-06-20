import React, { useState, useEffect } from 'react';
import './Carousel.css';
import ProductCard from './ProductCard';

export default function Carousel({ items }) {
  const [current, setCurrent] = useState(0);
  const total = items.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, [total]);

  if (total === 0) return null;

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-nav left" onClick={prevSlide} aria-label="Previous slide">
        &#9664;
      </button>
      <div className="carousel-slide" key={items[current].id}>
        <ProductCard product={items[current]} />
      </div>
      <button className="carousel-nav right" onClick={nextSlide} aria-label="Next slide">
        &#9654;
      </button>
    </div>
  );
}
