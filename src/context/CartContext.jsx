// import { createContext, useContext, useState, useEffect } from "react";
// import { useAuth } from "./AuthContext";
// import api from "../api/axios";

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export default function CartProvider({ children }) {
//   const { user } = useAuth();
//   const [cart, setCart] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Fetch cart when user logs in
//   useEffect(() => {
//     if (user) {
//       fetchCart();
//     } else {
//       setCart([]);
//     }
//   }, [user]);

//   const fetchCart = async () => {
//     if (!user) return;
//     try {
//       setLoading(true);
//       const res = await api.get("/cart");
//       setCart(res.data.items || []);
//     } catch (error) {
//       console.error("Failed to fetch cart:", error);
//       setCart([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const addToCart = async (item) => {
//     if (!user) {
//       alert("Please login first to add items to cart");
//       return;
//     }

//     try {
//       const res = await api.post("/cart/add", {
//         serviceId: String(item.id),
//         name: item.name,
//         price: item.price,
//         img: item.img,
//         desc: item.desc,
//         time: item.time,
//         rating: item.rating,
//       });
//       setCart(res.data.items);
//     } catch (error) {
//       console.error("Failed to add to cart:", error);
//       alert("Failed to add item to cart");
//     }
//   };

//   const removeFromCart = async (id, removeAll = false) => {
//     if (!user) return;

//     try {
//       const res = await api.post("/cart/remove", { serviceId: String(id), removeAll });
//       setCart(res.data.items);
//     } catch (error) {
//       console.error("Failed to remove from cart:", error);
//       alert("Failed to remove item from cart");
//     }
//   };

//   const clearCart = async () => {
//     if (!user) return;

//     try {
//       await api.delete("/cart/clear");
//       setCart([]);
//     } catch (error) {
//       console.error("Failed to clear cart:", error);
//     }
//   };

//   return (
//     <CartContext.Provider value={{
//       cart,
//       loading,
//       addToCart,
//       removeFromCart,
//       clearCart,
//       fetchCart
//     }}>
//       {children}
//     </CartContext.Provider>
//   );
// }
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import api from "../api/axios";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      fetchCart();
    } else {
      setCart([]);
    }
  }, [user]);

  const fetchCart = async () => {
    if (!user) return;

    try {
      setLoading(true);
      const res = await api.get("/cart");
      setCart(res.data.items || []);
    } catch (error) {
      console.error("Failed to fetch cart:", error);
      setCart([]);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (item) => {
    if (!user) {
      alert("Please login first to add items to cart");
      return;
    }

    try {
      const serviceId = String(item.serviceId || item.id);

      if (!serviceId || serviceId === "undefined") {
        console.error("Invalid serviceId:", item);
        alert("Service ID missing");
        return;
      }

      const res = await api.post("/cart/add", {
        serviceId,
        name: item.name,
        price: item.price,
        img: item.img,
        desc: item.desc,
        time: item.time,
        rating: item.rating,
      });

      setCart(res.data.items || []);
    } catch (error) {
      console.error("Failed to add to cart:", error);
      alert("Failed to add item to cart");
    }
  };

  const removeFromCart = async (id, removeAll = false) => {
    if (!user) return;

    try {
      const res = await api.post("/cart/remove", {
        serviceId: String(id),
        removeAll,
      });
      setCart(res.data.items || []);
    } catch (error) {
      console.error("Failed to remove from cart:", error);
      alert("Failed to remove item from cart");
    }
  };

  const clearCart = async () => {
    if (!user) return;

    try {
      await api.delete("/cart/clear");
      setCart([]);
    } catch (error) {
      console.error("Failed to clear cart:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addToCart,
        removeFromCart,
        clearCart,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}