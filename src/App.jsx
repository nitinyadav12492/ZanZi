// src/App.jsx — Route Definitions
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Navbar          from "./components/Navbar";
import Footer          from "./components/Footer";
import Home            from "./pages/Home";
import Login           from "./pages/Login";
import Signup          from "./pages/Signup";
import UserDashboard   from "./pages/UserDashboard";
import AdminDashboard  from "./pages/AdminDashboard";
import ServiceDetail   from "./pages/ServiceDetail";
import CartPage        from "./pages/Cartpage";

// Route guard for logged-in users
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};

// Route guard for admin only
const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== "admin") return <Navigate to="/" replace />;
  return children;
};

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/login"    element={<Login />} />
          <Route path="/signup"   element={<Signup />} />
          <Route path="/dashboard" element={<PrivateRoute><UserDashboard /></PrivateRoute>} />
          <Route path="/admin"    element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="/service/:category" element={<ServiceDetail />} />
          <Route path="/cart"     element={<CartPage />} />
          <Route path="*"         element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}