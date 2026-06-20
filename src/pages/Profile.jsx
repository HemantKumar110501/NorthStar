import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, LogOut, Calendar, ShoppingBag } from 'lucide-react';
import './Profile.css';

export default function Profile() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  // Compute orders directly via useMemo
  const orders = useMemo(() => {
    const savedOrders = localStorage.getItem('ns_orders');
    if (!savedOrders) return [];
    const allOrders = JSON.parse(savedOrders);
    const userOrders = allOrders.filter((o) => o.email.toLowerCase() === currentUser?.email?.toLowerCase());
    return [...userOrders].reverse();
  }, [currentUser]);

  // Redirect to login if not authenticated
  if (!currentUser) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Get user initials for avatar fallback
  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <div className="profile-page-container">
      <div className="profile-layout">
        {/* Left Column: Profile Card */}
        <div className="profile-card">
          <div className="profile-avatar-wrapper">
            <div className="profile-avatar">
              {getInitials(currentUser.username)}
            </div>
          </div>

          <h2 className="profile-name">{currentUser.username}</h2>
          <span className="profile-badge">NorthStar Member</span>

          <div className="profile-details">
            <div className="profile-detail-row">
              <Mail size={18} className="detail-icon" />
              <div className="detail-text">
                <span className="detail-label">Email Address</span>
                <span className="detail-val">{currentUser.email}</span>
              </div>
            </div>

            <div className="profile-detail-row">
              <Calendar size={18} className="detail-icon" />
              <div className="detail-text">
                <span className="detail-label">Membership Status</span>
                <span className="detail-val">Active Premium</span>
              </div>
            </div>
          </div>

          <button type="button" className="btn btn-outline btn-logout" onClick={handleLogout}>
            <LogOut size={16} className="btn-icon" />
            LOG OUT
          </button>
        </div>

        {/* Right Column: Orders History */}
        <div className="orders-panel">
          <h2 className="orders-title">My Orders</h2>
          {orders.length === 0 ? (
            <div className="no-orders-card">
              <ShoppingBag size={48} className="no-orders-icon" />
              <h3>No Orders Placed Yet</h3>
              <p>Looks like you haven't made any purchases yet. Start exploring our premium collections!</p>
            </div>
          ) : (
            <div className="orders-list">
              {orders.map((order) => (
                <div key={order.id} className="order-history-card">
                  <div className="order-card-header">
                    <div>
                      <span className="order-header-label">ORDER ID</span>
                      <span className="order-header-val">{order.id}</span>
                    </div>
                    <div>
                      <span className="order-header-label">DATE PLACED</span>
                      <span className="order-header-val">{order.date}</span>
                    </div>
                    <div>
                      <span className="order-header-label">TOTAL AMOUNT</span>
                      <span className="order-header-val">₹{order.total.toFixed(2)}</span>
                    </div>
                    <div>
                      <span className="order-status-badge">{order.status}</span>
                    </div>
                  </div>
                  
                  <div className="order-card-body">
                    <div className="order-items-list">
                      {order.items.map((item, idx) => (
                        <div key={`${item.id}-${item.size}-${idx}`} className="order-item-row">
                          <img src={item.image} alt={item.name} className="order-item-img" />
                          <div className="order-item-info">
                            <span className="order-item-name">{item.name}</span>
                            <span className="order-item-meta">Size: {item.size} | Qty: {item.quantity}</span>
                          </div>
                          <span className="order-item-price">₹{(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="order-shipping-info">
                      <span className="shipping-label">SHIPPED TO</span>
                      <span className="shipping-val">{order.shippingAddress}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
