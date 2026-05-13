// import { useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import { useAuth } from "../context/AuthContext";
// import BookingModal from "../components/BookingModal";
// import styles from "./CartPage.module.css";

// export default function CartPage() {
//   const { user } = useAuth();
//   const { cart, addToCart, removeFromCart, loading } = useCart();
//   const [showModal, setShowModal] = useState(false);

//   const updateQty = (item, change) => {
//     if (change > 0) {
//       addToCart(item);
//     } else {
//       removeFromCart(item.serviceId);
//     }
//   };

//   const subtotal = useMemo(() => {
//     return cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
//   }, [cart]);

//   const serviceFee = cart.length > 0 ? 49 : 0;
//   const total = subtotal + serviceFee;

//   if (!user) {
//     return (
//       <section className={styles.page}>
//         <div className={styles.container}>
//           <div className={styles.header}>
//             <div>
//               <p className={styles.subTitle}>Your Cart</p>
//               <h1 className={styles.title}>Review your selected services</h1>
//             </div>
//             <Link to="/" className={styles.backBtn}>
//               ← Continue Shopping
//             </Link>
//           </div>

//           <div className={styles.emptyBox}>
//             <div className={styles.emptyIcon}>🔒</div>
//             <h2>Please login to view your cart</h2>
//             <p>You need to be logged in to add and view items in your cart.</p>
//             <Link to="/login" className={styles.primaryBtn}>
//               Login Now
//             </Link>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (loading) {
//     return (
//       <section className={styles.page}>
//         <div className={styles.container}>
//           <div className={styles.loading}>Loading your cart...</div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className={styles.page}>
//       <div className={styles.container}>
//         <div className={styles.header}>
//           <div>
//             <p className={styles.subTitle}>Your Cart</p>
//             <h1 className={styles.title}>Review your selected services</h1>
//           </div>
//           <Link to="/" className={styles.backBtn}>
//             ← Continue Shopping
//           </Link>
//         </div>

//         {cart.length === 0 ? (
//           <div className={styles.emptyBox}>
//             <div className={styles.emptyIcon}>🛒</div>
//             <h2>Your cart is empty</h2>
//             <p>Add some services to continue booking.</p>
//             <Link to="/" className={styles.primaryBtn}>
//               Explore Services
//             </Link>
//           </div>
//         ) : (
//           <div className={styles.layout}>
//             <div className={styles.left}>
//               {cart.map((item) => {
//                 const qty = item.quantity || 1;

//                 return (
//                   <div key={item.serviceId} className={styles.card}>
//                     <img
//                       src={item.img}
//                       alt={item.name}
//                       className={styles.image}
//                     />

//                     <div className={styles.info}>
//                       <div className={styles.topRow}>
//                         <div>
//                           <h3>{item.name}</h3>
//                           <p className={styles.desc}>
//                             {item.desc || "Professional home service"}
//                           </p>
//                         </div>
//                         <button
//                           className={styles.removeBtn}
//                           onClick={() => removeFromCart(item.serviceId, true)}
//                         >
//                           Remove
//                         </button>
//                       </div>

//                       <div className={styles.meta}>
//                         <span>₹{item.price}</span>
//                         <span>{item.time || "1 hour"}</span>
//                         <span>{item.rating || "4.7"} ★</span>
//                       </div>

//                       <div className={styles.bottomRow}>
//                         <div className={styles.qtyBox}>
//                           <button onClick={() => updateQty(item, -1)}>-</button>
//                           <span>{qty}</span>
//                           <button onClick={() => updateQty(item, 1)}>+</button>
//                         </div>

//                         <div className={styles.price}>
//                           ₹{item.price * qty}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             <aside className={styles.summary}>
//               <h2>Price Summary</h2>

//               <div className={styles.summaryRow}>
//                 <span>Subtotal</span>
//                 <span>₹{subtotal}</span>
//               </div>

//               <div className={styles.summaryRow}>
//                 <span>Service Fee</span>
//                 <span>₹{serviceFee}</span>
//               </div>

//               <div className={`${styles.summaryRow} ${styles.totalRow}`}>
//                 <span>Total</span>
//                 <span>₹{total}</span>
//               </div>

//               <button className={styles.checkoutBtn} onClick={() => setShowModal(true)}>
//                 Proceed to Checkout
//               </button>

//               <div className={styles.noteBox}>
//                 <h4>Zanzee Promise</h4>
//                 <ul>
//                   <li>Verified professionals</li>
//                   <li>Transparent pricing</li>
//                   <li>30-day service support</li>
//                 </ul>
//               </div>
//             </aside>
//           </div>
//         )}
//       </div>

//       {showModal && (
//         <BookingModal 
//           onClose={() => setShowModal(false)} 
//           preSelected={`Cart: ${cart.map(item => `${item.quantity || 1}x ${item.name}`).join(", ")}`} 
//         />
//       )}
//     </section>
//   );
// }
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import BookingModal from "../components/BookingModal";
import styles from "./CartPage.module.css";

export default function CartPage() {
  const { user } = useAuth();
  const { cart, addToCart, removeFromCart, loading } = useCart();
  const [showModal, setShowModal] = useState(false);

  const mergedCart = useMemo(() => {
    const map = new Map();

    for (const item of cart) {
      const serviceId = String(item.serviceId || item.id);

      if (map.has(serviceId)) {
        const existing = map.get(serviceId);
        map.set(serviceId, {
          ...existing,
          quantity: (existing.quantity || 1) + (item.quantity || 1),
        });
      } else {
        map.set(serviceId, {
          ...item,
          serviceId,
          quantity: item.quantity || 1,
        });
      }
    }

    return Array.from(map.values());
  }, [cart]);

  const updateQty = (item, change) => {
    if (change > 0) {
      addToCart(item);
    } else {
      removeFromCart(item.serviceId);
    }
  };

  const subtotal = useMemo(() => {
    return mergedCart.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
  }, [mergedCart]);

  const serviceFee = mergedCart.length > 0 ? 49 : 0;
  const total = subtotal + serviceFee;

  if (!user) {
    return (
      <section className={styles.page}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div>
              <p className={styles.subTitle}>Your Cart</p>
              <h1 className={styles.title}>Review your selected services</h1>
            </div>
            <Link to="/" className={styles.backBtn}>
              ← Continue Shopping
            </Link>
          </div>

          <div className={styles.emptyBox}>
            <div className={styles.emptyIcon}>🔒</div>
            <h2>Please login to view your cart</h2>
            <p>You need to be logged in to add and view items in your cart.</p>
            <Link to="/login" className={styles.primaryBtn}>
              Login Now
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section className={styles.page}>
        <div className={styles.container}>
          <div className={styles.loading}>Loading your cart...</div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <p className={styles.subTitle}>Your Cart</p>
            <h1 className={styles.title}>Review your selected services</h1>
          </div>
          <Link to="/" className={styles.backBtn}>
            ← Continue Shopping
          </Link>
        </div>

        {mergedCart.length === 0 ? (
          <div className={styles.emptyBox}>
            <div className={styles.emptyIcon}>🛒</div>
            <h2>Your cart is empty</h2>
            <p>Add some services to continue booking.</p>
            <Link to="/" className={styles.primaryBtn}>
              Explore Services
            </Link>
          </div>
        ) : (
          <div className={styles.layout}>
            <div className={styles.left}>
              {mergedCart.map((item) => {
                const qty = item.quantity || 1;

                return (
                  <div key={item.serviceId} className={styles.card}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className={styles.image}
                    />

                    <div className={styles.info}>
                      <div className={styles.topRow}>
                        <div>
                          <h3>{item.name}</h3>
                          <p className={styles.desc}>
                            {item.desc || "Professional home service"}
                          </p>
                        </div>
                        <button
                          className={styles.removeBtn}
                          onClick={() => removeFromCart(item.serviceId, true)}
                        >
                          Remove
                        </button>
                      </div>

                      <div className={styles.meta}>
                        <span>₹{item.price}</span>
                        <span>{item.time || "1 hour"}</span>
                        <span>{item.rating || "4.7"} ★</span>
                      </div>

                      <div className={styles.bottomRow}>
                        <div className={styles.qtyBox}>
                          <button onClick={() => updateQty(item, -1)}>-</button>
                          <span>{qty}</span>
                          <button onClick={() => updateQty(item, 1)}>+</button>
                        </div>

                        <div className={styles.price}>
                          ₹{item.price * qty}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <aside className={styles.summary}>
              <h2>Price Summary</h2>

              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className={styles.summaryRow}>
                <span>Service Fee</span>
                <span>₹{serviceFee}</span>
              </div>

              <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <button
                className={styles.checkoutBtn}
                onClick={() => setShowModal(true)}
              >
                Proceed to Checkout
              </button>

              <div className={styles.noteBox}>
                <h4>Zanzee Promise</h4>
                <ul>
                  <li>Verified professionals</li>
                  <li>Transparent pricing</li>
                  <li>30-day service support</li>
                </ul>
              </div>
            </aside>
          </div>
        )}
      </div>

      {showModal && (
        <BookingModal
          onClose={() => setShowModal(false)}
          preSelected={`Cart: ${mergedCart
            .map((item) => `${item.quantity || 1}x ${item.name}`)
            .join(", ")}`}
        />
      )}
    </section>
  );
}