import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { id, name, price, originalPrice, image, offer } = product;

  return (
    <Link to={`/product/${id}`} className="product-card">
      <div className="product-image-container">
        {offer ? (
          <span className="badge-discount badge-offer-promo">
            {offer}
          </span>
        ) : originalPrice ? (
          <span className="badge-discount">
            -{Math.round(((originalPrice - price) / originalPrice) * 100)}%
          </span>
        ) : null}
        <img src={image} alt={name} className="product-image" loading="lazy" />
      </div>
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <div className="product-pricing">
          {originalPrice && (
            <span className="product-original-price">₹{originalPrice.toFixed(2)}</span>
          )}
          <span className="product-price">₹{price.toFixed(2)}</span>
        </div>
      </div>
    </Link>
  );
}
