// import { useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import api from "../api/axios";
// import BookingModal from "../components/BookingModal";
// import UserSidebar from "../components/UserSidebar";
// import BookingTabs from "../components/BookingTabs";
// import BookServiceCards from "../components/BookServiceCards";
// import { Menu, Search, Bell, Briefcase, CalendarClock, FileCheck, XCircle } from "lucide-react";

// export default function UserDashboard() {
//   const { user, updateProfile } = useAuth();
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [isMobileOpen, setMobileOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
  
//   const [bookings, setBookings] = useState([]);
//   const [loadingB, setLoadingB] = useState(true);
//   const [profile, setProfile] = useState({ name: user?.name || "", phone: "", address: "", password: "" });

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   useEffect(() => {
//     fetchBookings();
//     fetchProfile();
//   }, []);

//   const fetchBookings = async () => {
//     setLoadingB(true);
//     try { const res = await api.get("/bookings/my"); setBookings(res.data); }
//     catch { } finally { setLoadingB(false); }
//   };

//   const fetchProfile = async () => {
//     try { const res = await api.get("/auth/profile"); setProfile((p) => ({ ...p, name: res.data.name, phone: res.data.phone || "", address: res.data.address || "" })); } catch { }
//   };

//   const mockTotal     = bookings.length > 0 ? bookings.length : 14;
//   const mockPending   = bookings.filter(b => b.status === "pending").length || 3;
//   const mockCompleted = bookings.filter(b => b.status === "completed").length || 9;
//   const mockCancelled = bookings.filter(b => b.status === "cancelled").length || 2;

//   const statsCards = [
//     { label: "Total Bookings", value: mockTotal, icon: Briefcase, color: "text-blue-600", bg: "bg-blue-100" },
//     { label: "Pending", value: mockPending, icon: CalendarClock, color: "text-yellow-600", bg: "bg-yellow-100" },
//     { label: "Done", value: mockCompleted, icon: FileCheck, color: "text-green-600", bg: "bg-green-100" },
//     { label: "Cancelled", value: mockCancelled, icon: XCircle, color: "text-red-600", bg: "bg-red-100" },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-50 text-gray-900 font-sans">
      
//       <UserSidebar 
//         activeTab={activeTab} 
//         setActiveTab={setActiveTab} 
//         onLogout={handleLogout}
//         isMobileOpen={isMobileOpen}
//         setMobileOpen={setMobileOpen}
//       />

//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="sticky top-0 z-30 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <button 
//               className="lg:hidden p-2 -ml-2 rounded-md hover:bg-gray-100"
//               onClick={() => setMobileOpen(true)}
//             >
//               <Menu size={24} />
//             </button>
//             <div className="hidden sm:flex relative items-center">
//               <Search className="absolute left-3 text-gray-400" size={18} />
//               <input 
//                 type="text" 
//                 placeholder="Search..." 
//                 className="pl-10 pr-4 py-2 bg-gray-100 border-none rounded-md text-sm w-64 focus:ring-2 focus:ring-gray-200 outline-none"
//               />
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <button className="relative p-2 rounded-full hover:bg-gray-100 text-gray-600">
//               <Bell size={20} />
//             </button>
//             <div className="h-9 w-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm">
//               {user?.name?.charAt(0) || "U"}
//             </div>
//           </div>
//         </header>

//         {/* Content */}
//         <main className="flex-1 p-4 sm:p-8 max-w-7xl mx-auto w-full">
          
//           {activeTab === "dashboard" && (
//             <div className="space-y-8">
//               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                 <div>
//                   <h1 className="text-2xl font-bold text-gray-900">Hello, {user?.name?.split(" ")[0]} 👋</h1>
//                   <p className="text-sm text-gray-500 mt-1">What do you need help with today?</p>
//                 </div>
//                 <button onClick={() => setShowModal(true)} className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 shadow-sm transition-colors">
//                   Book New Service
//                 </button>
//               </div>

//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {statsCards.map((stat, i) => {
//                   const Icon = stat.icon;
//                   return (
//                     <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
//                       <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${stat.bg}`}>
//                         <Icon size={24} className={stat.color} />
//                       </div>
//                       <div>
//                         <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{stat.label}</p>
//                         <h3 className="text-2xl font-bold text-gray-900 mt-0.5">{stat.value}</h3>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               <div>
//                 <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Bookings</h2>
//                 <BookServiceCards onBook={() => setShowModal(true)} />
//               </div>

//               <div>
//                 <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Bookings</h2>
//                 <BookingTabs bookings={bookings.slice(0, 3)} />
//               </div>
//             </div>
//           )}

//           {activeTab === "bookings" && (
//             <div className="space-y-6">
//               <div className="flex justify-between items-center">
//                 <h1 className="text-2xl font-bold text-gray-900">My Bookings</h1>
//                 <button onClick={() => setShowModal(true)} className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 shadow-sm transition-colors">
//                   Book Now
//                 </button>
//               </div>
//               <BookingTabs bookings={bookings} />
//             </div>
//           )}
          
//           {activeTab === "book-service" && (
//             <div className="space-y-6">
//               <h1 className="text-2xl font-bold text-gray-900">Services</h1>
//               <BookServiceCards onBook={() => setShowModal(true)} />
//             </div>
//           )}
          
//           {activeTab === "profile" && (
//             <div className="max-w-2xl bg-white border border-gray-200 rounded-xl p-6">
//               <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Settings</h2>
//               <form className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//                   <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 outline-none" value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
//                   <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 outline-none" value={profile.phone} onChange={e => setProfile({...profile, phone: e.target.value})} />
//                 </div>
//                 <button type="button" className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 shadow-sm transition-colors">
//                   Save Changes
//                 </button>
//               </form>
//             </div>
//           )}
          
//           {["payments", "support"].includes(activeTab) && (
//             <div className="flex flex-col items-center justify-center py-20 text-center">
//               <h2 className="text-xl font-bold text-gray-900 mb-2">Coming Soon</h2>
//               <p className="text-gray-500 text-sm">This section is under development.</p>
//             </div>
//           )}

//         </main>
//       </div>

//       {showModal && <BookingModal onClose={() => { setShowModal(false); fetchBookings(); }} />}
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../api/axios";
import BookingModal from "../components/BookingModal";
import UserSidebar from "../components/UserSidebar";
import BookingTabs from "../components/BookingTabs";
import BookServiceCards from "../components/BookServiceCards";
import { Menu, Search, Bell, Briefcase, CalendarClock, FileCheck, XCircle } from "lucide-react";
import styles from "./UserDashboard.module.css";
export default function UserDashboard() {
  const { user, updateProfile } = useAuth();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const [bookings, setBookings] = useState([]);
  const [loadingB, setLoadingB] = useState(true);
  const [profile, setProfile] = useState({ name: user?.name || "", phone: "", address: "", password: "" });

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  useEffect(() => {
    fetchBookings();
    fetchProfile();
  }, []);

  const fetchBookings = async () => {
    setLoadingB(true);
    try { const res = await api.get("/bookings/my"); setBookings(res.data); }
    catch { } finally { setLoadingB(false); }
  };

  const fetchProfile = async () => {
    try { const res = await api.get("/auth/profile"); setProfile((p) => ({ ...p, name: res.data.name, phone: res.data.phone || "", address: res.data.address || "" })); } catch { }
  };

  const totalBookings = bookings.length;
  const pendingBookings = bookings.filter(b => b.status === "pending").length;
  const completedBookings = bookings.filter(b => b.status === "completed").length;
  const cancelledBookings = bookings.filter(b => b.status === "cancelled").length;

  const statsCards = [
    { label: "Total Bookings", value: totalBookings, icon: Briefcase, color: "text-blue-600", bg: "bg-blue-100" },
    { label: "Pending", value: pendingBookings, icon: CalendarClock, color: "text-yellow-600", bg: "bg-yellow-100" },
    { label: "Done", value: completedBookings, icon: FileCheck, color: "text-green-600", bg: "bg-green-100" },
    { label: "Cancelled", value: cancelledBookings, icon: XCircle, color: "text-red-600", bg: "bg-red-100" },
  ];

  const [updating, setUpdating] = useState(false);
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (updating) return;
    try {
      setUpdating(true);
      await updateProfile({ name: profile.name, phone: profile.phone });
      alert("Profile updated successfully!");
    } catch (err) {
      alert("Failed to update profile.");
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className={styles.layout}>
      
      <UserSidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLogout={handleLogout}
        isMobileOpen={isMobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className={styles.mainArea}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <button 
              className={styles.mobileMenuBtn}
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className={styles.searchBox}>
              <input 
                type="text" 
                placeholder="Search..." 
              />
            </div>
          </div>

          <div className={styles.headerRight}>
            <button className={styles.notifyBtn}>
              <Bell size={20} />
            </button>
            <div className={styles.avatar}>
              {user?.name?.charAt(0) || "U"}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className={styles.main}>
          
          {activeTab === "dashboard" && (
            <div className={styles.sectionSpace}>
              <div className={styles.topBar}>
                <div>
                  <h1 className={styles.pageTitle}>Hello, {user?.name?.split(" ")[0]} 👋</h1>
                  <p className={styles.pageSub}>What do you need help with today?</p>
                </div>
                <button onClick={() => setShowModal(true)} className={styles.primaryBtn}>
                  Book New Service
                </button>
              </div>

              <div className={styles.statsGrid}>
                {statsCards.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className={styles.statCard}>
                      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${stat.bg}`}>
                          <Icon size={24} className={stat.color} />
                        </div>
                        <div>
                          <p>{stat.label}</p>
                          <h3>{stat.value}</h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div>
                <h2 className={styles.sectionTitle}>Quick Bookings</h2>
                <BookServiceCards onBook={() => setShowModal(true)} />
              </div>

              <div>
                <h2 className={styles.sectionTitle}>Recent Bookings</h2>
                <BookingTabs bookings={bookings.slice(0, 3)} />
              </div>
            </div>
          )}

          {activeTab === "bookings" && (
            <div className={styles.sectionSpace}>
              <div className={styles.topBar}>
                <h1 className={styles.pageTitle}>My Bookings</h1>
                <button onClick={() => setShowModal(true)} className={styles.primaryBtn}>
                  Book Now
                </button>
              </div>
              <BookingTabs bookings={bookings} />
            </div>
          )}
          
          {activeTab === "book-service" && (
            <div className={styles.sectionSpace}>
              <h1 className={styles.pageTitle}>Services</h1>
              <BookServiceCards onBook={() => setShowModal(true)} />
            </div>
          )}
          
          {activeTab === "profile" && (
            <div className={styles.profileCard}>
              <h2 className={styles.sectionTitle}>Profile Settings</h2>
              <form className={styles.profileForm} onSubmit={handleUpdateProfile}>
                <div className={styles.inputGroup}>
                  <label>Full Name</label>
                  <input type="text" value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} />
                </div>
                <div className={styles.inputGroup}>
                  <label>Phone</label>
                  <input type="tel" value={profile.phone} onChange={e => setProfile({...profile, phone: e.target.value})} />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <button type="submit" className={styles.primaryBtn} disabled={updating}>
                    {updating ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </form>
            </div>
          )}
          
          {["payments", "support"].includes(activeTab) && (
            <div className={styles.comingSoon}>
              <h2>Coming Soon</h2>
              <p>This section is under development.</p>
            </div>
          )}

        </main>
      </div>

      {showModal && <BookingModal onClose={() => { setShowModal(false); fetchBookings(); }} />}
    </div>
  );
}