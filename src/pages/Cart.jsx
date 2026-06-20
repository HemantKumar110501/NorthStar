import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, getSubtotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container empty-cart-container section text-center">
        <div className="empty-cart-icon">
          <ShoppingBag size={64} />
        </div>
        <h2 className="empty-title">Your Cart is Empty</h2>
        <p className="empty-desc">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="btn btn-primary empty-shop-btn">
          Go Shopping
        </Link>
      </div>
    );
  }

  const handleQtyChange = (productId, size, currentQty, amount) => {
    updateQuantity(productId, size, currentQty + amount);
  };

  const subtotal = getSubtotal();

  return (
    <div className="cart-page section">
      <div className="container">
        <h1 className="cart-page-title">Shopping Cart</h1>

        <div className="cart-layout">
          {/* Cart Table Area */}
          <div className="cart-table-wrapper">
            <table className="cart-table">
              <thead>
                <tr>
                  <th className="th-product" colSpan="2">Product</th>
                  <th className="th-price text-right">Price</th>
                  <th className="th-quantity text-center">Quantity</th>
                  <th className="th-total text-right">Total</th>
                  <th className="th-remove"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={`${item.id}-${item.size}`} className="cart-row">
                    {/* Image */}
                    <td className="td-image">
                      <Link to={`/product/${item.id}`}>
                        <img src={item.image} alt={item.name} className="cart-item-img" />
                      </Link>
                    </td>
                    {/* Info */}
                    <td className="td-info text-left">
                      <Link to={`/product/${item.id}`} className="cart-item-name">
                        {item.name}
                      </Link>
                      <span className="cart-item-size">Size: {item.size}</span>
                    </td>
                    {/* Price */}
                    <td className="td-price text-right">
                      ₹{item.price.toFixed(2)}
                    </td>
                    {/* Quantity */}
                    <td className="td-quantity text-center">
                      <div className="cart-quantity-selector">
                        <button
                          type="button"
                          className="cart-qty-btn"
                          onClick={() => handleQtyChange(item.id, item.size, item.quantity, -1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="cart-qty-val">{item.quantity}</span>
                        <button
                          type="button"
                          className="cart-qty-btn"
                          onClick={() => handleQtyChange(item.id, item.size, item.quantity, 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </td>
                    {/* Total */}
                    <td className="td-total text-right">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </td>
                    {/* Remove */}
                    <td className="td-remove text-center">
                      <button
                        type="button"
                        className="cart-remove-btn"
                        onClick={() => removeFromCart(item.id, item.size)}
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Totals Card */}
          <div className="cart-totals-panel">
            <div className="cart-totals-card">
              <h3 className="totals-title">Cart Totals</h3>
              
              <div className="totals-row">
                <span className="totals-label">Subtotal</span>
                <span className="totals-value">₹{subtotal.toFixed(2)}</span>
              </div>
              
              <div className="totals-row">
                <span className="totals-label">Shipping</span>
                <span className="totals-value shipping-free">Free</span>
              </div>
              
              <hr className="totals-divider" />
              
              <div className="totals-row total-row-final">
                <span className="totals-label bold">Total</span>
                <span className="totals-value bold-price">₹{subtotal.toFixed(2)}</span>
              </div>
              
              <Link to="/checkout" className="btn btn-primary btn-block btn-checkout">
                PROCEED TO CHECKOUT
                <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
