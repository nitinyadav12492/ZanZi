// src/context/AuthContext.jsx — Global Auth State
import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser]       = useState(() => JSON.parse(localStorage.getItem("zanzeeUser") || "null"));
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);
  const [pendingEmail, setPendingEmail] = useState(null);

  useEffect(() => {
    if (user) localStorage.setItem("zanzeeUser", JSON.stringify(user));
    else localStorage.removeItem("zanzeeUser");
  }, [user]);

  const signup = async (data) => {
    setLoading(true); setError(null);
    try {
      const res = await api.post("/auth/signup", data);
      setPendingEmail(data.email);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
      throw err;
    } finally { setLoading(false); }
  };

  const verifyEmail = async (email, otp, signupData) => {
    setLoading(true); setError(null);
    try {
      const res = await api.post("/auth/verify-email", { email, otp, ...signupData });
      setUser(res.data);
      setPendingEmail(null);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.message || "Verification failed");
      throw err;
    } finally { setLoading(false); }
  };

  const resendOTP = async (email) => {
    setLoading(true); setError(null);
    try {
      const res = await api.post("/auth/resend-otp", { email });
      return res.data;
    } catch (err) {
      setError(err.response?.data?.message || "Failed to resend code");
      throw err;
    } finally { setLoading(false); }
  };

  const login = async (data) => {
    setLoading(true); setError(null);
    try {
      const res = await api.post("/auth/login", data);
      setUser(res.data);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      throw err;
    } finally { setLoading(false); }
  };

  const logout = () => {
    localStorage.removeItem("zanzeeUser");
    setUser(null);
  };

  const updateProfile = async (data) => {
    setLoading(true);
    try {
      const res = await api.put("/auth/profile", data);
      setUser((prev) => ({ ...prev, ...res.data }));
      return res.data;
    } finally { setLoading(false); }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, signup, verifyEmail, resendOTP, login, logout, updateProfile, setError, pendingEmail, setPendingEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
// src/context/AuthContext.jsx — Global Auth State
// import { createContext, useContext, useState, useEffect } from "react";
// import api from "../api/axios";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser]       = useState(() => JSON.parse(localStorage.getItem("zanzeeUser") || "null"));
//   const [loading, setLoading] = useState(false);
//   const [error, setError]     = useState(null);

//   useEffect(() => {
//     if (user) localStorage.setItem("zanzeeUser", JSON.stringify(user));
//     else localStorage.removeItem("zanzeeUser");
//   }, [user]);

//   // ✅ Signup — user seedha set hoga, OTP nahi
//   const signup = async (data) => {
//     setLoading(true); setError(null);
//     try {
//       const res = await api.post("/auth/signup", data);
//       setUser(res.data);   // ← yahi fix hai, pehle yeh missing tha
//       return res.data;
//     } catch (err) {
//       setError(err.response?.data?.message || "Signup failed");
//       throw err;
//     } finally { setLoading(false); }
//   };

//   const login = async (data) => {
//     setLoading(true); setError(null);
//     try {
//       const res = await api.post("/auth/login", data);
//       setUser(res.data);
//       return res.data;
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//       throw err;
//     } finally { setLoading(false); }
//   };

//   const logout = () => {
//     localStorage.removeItem("zanzeeUser");
//     setUser(null);
//   };

//   const updateProfile = async (data) => {
//     setLoading(true);
//     try {
//       const res = await api.put("/auth/profile", data);
//       setUser((prev) => ({ ...prev, ...res.data }));
//       return res.data;
//     } finally { setLoading(false); }
//   };

//   return (
//     <AuthContext.Provider value={{
//       user, loading, error, setError,
//       signup, login, logout, updateProfile,
//     }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);