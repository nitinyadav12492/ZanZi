import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookingModal from "../components/BookingModal";
import servicesData from "../components/data/ServiceData";
import { useCart } from "../context/CartContext";
import styles from "./ServiceDetail.module.css";

const categoryMap = {
  home: "HOME SERVICE",
  electrical: "ELECTRICAL WORK",
  ac: "AC & APPLIANCE",
  plumbing: "PLUMBING WORK",
  welding: "WELDING WORK",
  decor: "HOME DECOR",
  garden: "GARDEN WORK",
  staff: "CLEANING" // Mapped to cleaning for now
};

const iconMap = {
  "ELECTRICAL WORK": "⚡",
  "PLUMBING WORK": "🚿",
  "HOME DECOR": "🖼️",
  "GARDEN WORK": "🌿",
  "WELDING WORK": "🔨",
  "AC & APPLIANCE": "❄️",
  "HOME SERVICE": "🏠",
  "CLEANING": "🧹",
};

export default function ServiceDetail() {
  const { category } = useParams();
  const navigate = useNavigate();
  
  const initialCategory = categoryMap[category] || Object.keys(servicesData)[0];
  const [activeSub, setActiveSub] = useState(initialCategory);

  const { cart, addToCart, removeFromCart } = useCart();
  // We no longer trigger modal from here, we navigate to the Cart page directly
  // const [showModal, setShowModal] = useState(false);

  // Generate subcategories dynamically based on the keys in ServiceData
  const subcategories = Object.keys(servicesData).map(key => ({
    id: key,
    name: key,
    icon: iconMap[key] || "🔧"
  }));

  // Active services list
  const services = servicesData[activeSub]?.services || [];
  const videos = [
    {
      id: "video1",
      title: "Fast Home Repair Tips",
      src: "https://www.youtube.com/embed/jpb148s94Jw"
    },
    {
      id: "video2",
      title: "Smart Maintenance Tricks",
      src: "https://www.youtube.com/embed/2g7MY5sD3eQ"
    },
    {
      id: "video3",
      title: "Quality Service Guide",
      src: "https://www.youtube.com/embed/MmcdhVU0qNU"
    }
  ];

  const updateQty = (svc, delta) => {
    if (delta > 0) {
      addToCart(svc);
    } else {
      removeFromCart(svc.id);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          ← Back
        </button>
        <div className={styles.layout}>
          
          {/* Left Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
              <span className={styles.sidebarTitle}>All Categories</span>
              <hr className={styles.sidebarLine} />
            </div>

            <div className={styles.subGrid}>
              {subcategories.map((sub) => (
                <div
                  key={sub.id}
                  className={styles.subItem}
                  onClick={() => setActiveSub(sub.id)}
                >
                  <div className={`${styles.iconBox} ${activeSub === sub.id ? styles.activeIconBox : ""}`}>
                    <span className={styles.subcatIcon}>{sub.icon}</span>
                  </div>
                  <span className={`${styles.subLabel} ${activeSub === sub.id ? styles.activeLabel : ""}`}>
                    {sub.name}
                  </span>
                </div>
              ))}
            </div>
          </aside>

          {/* Middle Main Content */}
          <main className={styles.main}>
            <h1 className={styles.mainTitle}>{activeSub}</h1>

            <div className={styles.serviceList}>
              {services.map((svc) => {
                const cartItem = cart.find(x => x.serviceId === String(svc.id));
                const qty = cartItem ? cartItem.quantity : 0;

                return (
                  <div key={svc.id} className={styles.serviceCard}>
                    <div className={styles.serviceInfo}>
                      <h3 className={styles.serviceName}>{svc.name}</h3>
                      {svc.desc && (
                        <h4 className={styles.serviceSubtitle}>{svc.desc}</h4>
                      )}
                      
                      <div className={styles.serviceRating}>
                        <span className={styles.starIcon}>★</span>
                        <span>{svc.rating} ({svc.reviews} reviews)</span>
                      </div>

                      <div className={styles.serviceMeta}>
                        <span className={styles.price}>₹{svc.price}</span>
                        <span className={styles.dot}>•</span>
                        <span>{svc.time}</span>
                      </div>

                      <button className={styles.viewDetails}>View details</button>
                    </div>

                    <div className={styles.serviceAction}>
                      <img src={svc.img} alt={svc.name} className={styles.serviceImage} />
                      
                      {qty === 0 ? (
                        <button className={styles.addButton} onClick={() => updateQty(svc, 1)}>
                          Add
                        </button>
                      ) : (
                        <div className={styles.qtyControl}>
                          <button className={styles.qtyBtn} onClick={() => updateQty(svc, -1)}>−</button>
                          <span className={styles.qtyValue}>{qty}</span>
                          <button className={styles.qtyBtn} onClick={() => updateQty(svc, 1)}>+</button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className={styles.cartSection}>
            <div 
              className={styles.checkoutSticky} 
              style={{ display: total > 0 ? "flex" : "none", cursor: 'pointer' }}
              onClick={() => navigate('/cart')}
            >
              <span className={styles.checkoutPrice}>₹{total}</span>
              <span className={styles.checkoutText}>View Cart</span>
            </div>

            <div className={styles.offerCard}>
              <div className={styles.offerCardTop}>
                <div className={styles.offerIcon}>%</div>
                <div className={styles.offerText}>
                  <h4>Get visitation fee off</h4>
                  <p>On orders above ₹500</p>
                </div>
              </div>
              <div className={styles.offerMore}>
                View More Offers <span style={{ fontSize: "10px", marginLeft: "4px" }}>▼</span>
              </div>
            </div>

            <div className={styles.promiseCard}>
              <h3 className={styles.promiseTitle}>UC Promise</h3>
              
              <div className={styles.promiseList}>
                <div className={styles.promiseItem}>
                  <span className={styles.promiseCheck}>✓</span> Verified Professionals
                </div>
                <div className={styles.promiseItem}>
                  <span className={styles.promiseCheck}>✓</span> Hassle Free Booking
                </div>
                <div className={styles.promiseItem}>
                  <span className={styles.promiseCheck}>✓</span> Transparent Pricing
                </div>
              </div>

              <div className={styles.qualityBadge}>
                <span className={styles.badgeTextTop}>QUALITY</span>
                <span className={styles.badgeIcon}>✓</span>
                <span className={styles.badgeTextBottom}>ASSURED</span>
              </div>
            </div>

            <div className={styles.videoSection}>
              <div className={styles.videoHeader}>
                <span className={styles.videoLabel}>Pro Tips</span>
                <h4 className={styles.videoTitle}>Watch How It Works</h4>
              </div>
              <div className={styles.videoGrid}>
                {videos.map((video) => (
                  <div key={video.id} className={styles.videoCard}>
                    <div className={styles.videoBadge}>▶</div>
                    <div className={styles.videoWrapper}>
                      <iframe
                        className={styles.videoIframe}
                        src={video.src}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <p className={styles.videoCaption}>{video.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}