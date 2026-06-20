import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Checkout.css';

// Helper to generate a random order number (moved outside component to keep it pure)
function generateOrderNumber() {
  return 'NS-' + Math.floor(100000 + Math.random() * 900000);
}

export default function Checkout() {
  const { cartItems, getSubtotal, clearCart } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'India',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    notes: ''
  });

  useEffect(() => {
    if (!currentUser) {
      navigate('/login', { state: { from: '/checkout' } });
    }
  }, [currentUser, navigate]);

  const [isOrdered, setIsOrdered] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!currentUser) return; // double check

    const randomOrderNum = generateOrderNumber();

    // Save order details to localStorage
    const savedOrders = localStorage.getItem('ns_orders');
    const orders = savedOrders ? JSON.parse(savedOrders) : [];

    const newOrder = {
      id: randomOrderNum,
      email: currentUser.email,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        size: item.size,
        quantity: item.quantity,
        image: item.image
      })),
      total: subtotal,
      shippingAddress: `${formData.streetAddress}, ${formData.city}, ${formData.state} ${formData.zip}`,
      status: 'Processing'
    };

    orders.push(newOrder);
    localStorage.setItem('ns_orders', JSON.stringify(orders));

    setOrderNumber(randomOrderNum);
    setIsOrdered(true);
  };

  const handleCloseSuccessModal = () => {
    clearCart();
    navigate('/');
  };

  const subtotal = getSubtotal();

  if (!currentUser) {
    return null;
  }

  if (cartItems.length === 0 && !isOrdered) {
    return (
      <div className="container empty-checkout section text-center">
        <div className="empty-cart-icon">
          <ShoppingBag size={64} />
        </div>
        <h2>No Items to Checkout</h2>
        <p>Your cart is empty. Please add items to your cart before checking out.</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '24px' }}>
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-page section">
      <div className="container">
        {/* Success Modal */}
        {isOrdered && (
          <div className="modal-overlay">
            <div className="success-modal">
              <CheckCircle2 size={72} className="modal-success-icon" />
              <h2 className="modal-title">ORDER PLACED SUCCESSFULLY!</h2>
              <p className="modal-order-number">Order ID: <strong>{orderNumber}</strong></p>
              <p className="modal-desc">
                Thank you for shopping with NorthStar. Your order has been registered, and our delivery agent will contact you shortly.
              </p>
              <div className="modal-summary-box">
                <h4>Order Summary</h4>
                <div className="modal-summary-details">
                  <div className="modal-summary-row">
                    <span>Shipping Address:</span>
                    <strong>{formData.streetAddress}, {formData.city}</strong>
                  </div>
                  <div className="modal-summary-row">
                    <span>Contact Person:</span>
                    <strong>{formData.firstName} {formData.lastName}</strong>
                  </div>
                  <div className="modal-summary-row final-amount">
                    <span>Total Amount Paid:</span>
                    <strong>₹{subtotal.toFixed(2)}</strong>
                  </div>
                </div>
              </div>
              <div className="modal-actions">
                <button
                  type="button"
                  className="btn btn-outline btn-block"
                  onClick={handleCloseSuccessModal}
                >
                  CONTINUE SHOPPING
                </button>
                <button
                  type="button"
                  className="btn btn-accent btn-block"
                  onClick={() => {
                    clearCart();
                    navigate(currentUser ? '/profile' : '/login');
                  }}
                >
                  VIEW MY ORDERS
                </button>
              </div>
            </div>
          </div>
        )}

        <h1 className="checkout-page-title">Checkout</h1>

        <form className="checkout-layout" onSubmit={handlePlaceOrder}>
          {/* Left Column: Billing Details */}
          <div className="billing-details-panel">
            <h3 className="checkout-sub-title">Billing Details</h3>

            <div className="form-row-two-col">
              <div className="form-group">
                <label className="form-label" htmlFor="firstName">
                  First Name <span>*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="lastName">
                  Last Name <span>*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="companyName">
                Company Name (optional)
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="country">
                Country / Region <span>*</span>
              </label>
              <select
                id="country"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className="form-input select-input"
              >
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="streetAddress">
                Street Address <span>*</span>
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                required
                placeholder="House number and street name"
                value={formData.streetAddress}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-row-two-col">
              <div className="form-group">
                <label className="form-label" htmlFor="city">
                  Town / City <span>*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="state">
                  State / County <span>*</span>
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row-two-col">
              <div className="form-group">
                <label className="form-label" htmlFor="zip">
                  Postcode / ZIP <span>*</span>
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  required
                  value={formData.zip}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="phone">
                  Phone <span>*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email Address <span>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                readOnly
                value={currentUser ? currentUser.email : ''}
                className="form-input"
                style={{ backgroundColor: '#f5f5f5', cursor: 'not-allowed' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="notes">
                Order Notes (optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                placeholder="Notes about your order, e.g. special notes for delivery."
                value={formData.notes}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          {/* Right Column: Order Details */}
          <div className="order-details-panel">
            <h3 className="checkout-sub-title">Your Order</h3>

            <div className="order-summary-card">
              <table className="order-summary-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th className="text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={`${item.id}-${item.size}`} className="order-summary-row">
                      <td className="summary-item-name">
                        {item.name} - {item.size} <span className="summary-item-qty">× {item.quantity}</span>
                      </td>
                      <td className="summary-item-subtotal text-right">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}

                  <tr className="order-summary-meta">
                    <td>Subtotal</td>
                    <td className="text-right font-medium">₹{subtotal.toFixed(2)}</td>
                  </tr>

                  <tr className="order-summary-meta">
                    <td>Shipping</td>
                    <td className="text-right font-medium shipping-free">Free</td>
                  </tr>

                  <tr className="order-summary-meta final-total-row">
                    <td className="bold">Total</td>
                    <td className="text-right bold-price">₹{subtotal.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>

              {/* Payment Info */}
              <div className="payment-method-box">
                <h4 className="payment-title">Cash on delivery</h4>
                <p className="payment-description">
                  Pay with cash upon delivery. Easy and secure shopping.
                </p>
              </div>

              {/* Place Order CTA */}
              <button type="submit" className="btn btn-accent btn-block btn-place-order">
                PLACE ORDER
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
