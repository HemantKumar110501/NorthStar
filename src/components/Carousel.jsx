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

  return (
    <div className="carousel-container">
      <div className="carousel-slide" key={items[current].id}>
        <ProductCard product={items[current]} />
      </div>
    </div>
  );
}
