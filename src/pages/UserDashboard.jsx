
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