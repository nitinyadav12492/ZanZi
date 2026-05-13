
import { useState, useEffect, useMemo } from "react";
import api from "../api/axios";
import styles from "./AdminDashboard.module.css";
// SVG Icons
const IconDashboard = () => <span style={{ fontSize: "1.2rem" }}>📊</span>;
const IconBookings = () => <span style={{ fontSize: "1.2rem" }}>📋</span>;
const IconServices = () => <span style={{ fontSize: "1.2rem" }}>🔧</span>;
const IconUsers = () => <span style={{ fontSize: "1.2rem" }}>👥</span>;
const IconLogout = () => <span style={{ fontSize: "1.2rem" }}>🚪</span>;

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [bookings, setBookings] = useState([]);
  const [services, setServices] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Service form state
  const [svcForm, setSvcForm] = useState({ title:"", category:"", description:"", price:"", icon:"🔧", subServices:"" });
  const [editId, setEditId] = useState(null);
  const [svcMsg, setSvcMsg] = useState("");

  useEffect(() => { fetchAll(); }, []);

  const fetchAll = async () => {
    setLoading(true);
    await Promise.all([fetchBookings(), fetchServices(), fetchUsers()]);
    setLoading(false);
  };

  const fetchBookings = async () => { try { const r = await api.get("/bookings"); setBookings(r.data); } catch {} };
  const fetchServices = async () => { try { const r = await api.get("/services/all"); setServices(r.data); } catch {} };
  const fetchUsers = async () => { try { const r = await api.get("/auth/users"); setUsers(r.data); } catch {} };

  const updateBookingStatus = async (id, status) => {
    try {
      await api.put(`/bookings/${id}/status`, { status });
      fetchBookings();
    } catch {}
  };

  const deleteBooking = async (id) => {
    if (!window.confirm("Delete this booking?")) return;
    try {
      await api.delete(`/bookings/${id}`);
      fetchBookings();
    } catch {}
  };

  const handleSvcSubmit = async (e) => {
    e.preventDefault();
    setSvcMsg("");

    const payload = {
      ...svcForm,
      price: Number(svcForm.price),
      subServices: svcForm.subServices.split(",").map(s => s.trim()).filter(Boolean)
    };

    try {
      if (editId) {
        await api.put(`/services/${editId}`, payload);
        setSvcMsg("Service updated!");
      } else {
        await api.post("/services", payload);
        setSvcMsg("Service added!");
      }
      setSvcForm({ title:"", category:"", description:"", price:"", icon:"🔧", subServices:"" });
      setEditId(null);
      fetchServices();
      setTimeout(() => setSvcMsg(""), 3000);
    } catch (err) {
      setSvcMsg(err.response?.data?.message || "Error saving service");
    }
  };

  const editService = (svc) => {
    setSvcForm({
      title: svc.title,
      category: svc.category,
      description: svc.description,
      price: svc.price || "",
      icon: svc.icon || "🔧",
      subServices: svc.subServices?.join(", ") || ""
    });
    setEditId(svc._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deleteService = async (id) => {
    if (!window.confirm("Delete this service?")) return;
    try {
      await api.delete(`/services/${id}`);
      fetchServices();
    } catch {}
  };

  // Derived stats
  const revenue = useMemo(() => {
    return bookings.filter(b => b.status === "completed").reduce((sum, b) => {
      const svc = services.find(s => s.title === b.serviceType);
      return sum + (svc ? Number(svc.price) : 0);
    }, 0);
  }, [bookings, services]);

  const pendingBookings = useMemo(() => bookings.filter(b => b.status === "pending").length, [bookings]);

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <span className={styles.brandLogo}>🛠️</span>
          <h2>Admin Panel</h2>
        </div>
        
        <nav className={styles.nav}>
          <button className={`${styles.navItem} ${activeTab === 'dashboard' ? styles.active : ''}`} onClick={() => setActiveTab('dashboard')}>
            <IconDashboard /> Overview
          </button>
          <button className={`${styles.navItem} ${activeTab === 'bookings' ? styles.active : ''}`} onClick={() => setActiveTab('bookings')}>
            <IconBookings /> Manage Bookings
          </button>
          <button className={`${styles.navItem} ${activeTab === 'services' ? styles.active : ''}`} onClick={() => setActiveTab('services')}>
            <IconServices /> Manage Services
          </button>
          <button className={`${styles.navItem} ${activeTab === 'users' ? styles.active : ''}`} onClick={() => setActiveTab('users')}>
            <IconUsers /> Registered Users
          </button>
        </nav>

        <div className={styles.sidebarFooter}>
           <button className={styles.exitBtn} onClick={() => window.location.href='/'}>
             <IconLogout /> Exit Admin
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.pageTitle}>
              {activeTab === 'dashboard' && 'Dashboard Overview'}
              {activeTab === 'bookings' && 'Manage Bookings'}
              {activeTab === 'services' && 'Services Catalog'}
              {activeTab === 'users' && 'Registered Users'}
            </h1>
            <p className={styles.pageSub}>Welcome back, Super Admin</p>
          </div>
          <div className={styles.avatar}>A</div>
        </header>

        <div className={styles.content}>
          {loading ? (
             <div className={styles.loader}>Loading...</div>
          ) : (
             <>
               {/* Dashboard Tab */}
               {activeTab === 'dashboard' && (
                 <>
                   <div className={styles.statsGrid}>
                     <div className={styles.statCard}>
                       <div className={styles.statIcon}>📋</div>
                       <div>
                         <p>Total Bookings</p>
                         <h3>{bookings.length}</h3>
                       </div>
                     </div>
                     <div className={styles.statCard}>
                       <div className={styles.statIcon}>💰</div>
                       <div>
                         <p>Total Revenue</p>
                         <h3>₹{revenue.toLocaleString()}</h3>
                       </div>
                     </div>
                     <div className={styles.statCard}>
                       <div className={styles.statIcon}>⏳</div>
                       <div>
                         <p>Pending</p>
                         <h3>{pendingBookings}</h3>
                       </div>
                     </div>
                     <div className={styles.statCard}>
                       <div className={styles.statIcon}>🔧</div>
                       <div>
                         <p>Total Services</p>
                         <h3>{services.length}</h3>
                       </div>
                     </div>
                   </div>

                   <div className={styles.sectionBox}>
                     <h3 className={styles.sectionTitle}>Recent Bookings</h3>
                     <div className={styles.tableWrap}>
                       <table className={styles.table}>
                         <thead>
                           <tr>
                             <th>Client</th>
                             <th>Service</th>
                             <th>Date</th>
                             <th>Status</th>
                           </tr>
                         </thead>
                         <tbody>
                           {bookings.slice(0, 5).map(b => (
                             <tr key={b._id}>
                               <td><strong>{b.name}</strong><br/><span className={styles.muted}>{b.phone}</span></td>
                               <td>{b.serviceType}</td>
                               <td>{new Date(b.date).toLocaleDateString()}</td>
                               <td><span className={styles.badge}>{b.status}</span></td>
                             </tr>
                           ))}
                           {bookings.length === 0 && <tr><td colSpan="4">No bookings found.</td></tr>}
                         </tbody>
                       </table>
                     </div>
                   </div>
                 </>
               )}

               {/* Bookings Tab */}
               {activeTab === 'bookings' && (
                 <div className={styles.sectionBox}>
                   <div className={styles.tableWrap}>
                     <table className={styles.table}>
                       <thead>
                         <tr>
                           <th>Client details</th>
                           <th>Service & Date</th>
                           <th>Address</th>
                           <th>Status</th>
                           <th>Actions</th>
                         </tr>
                       </thead>
                       <tbody>
                         {bookings.map(b => (
                           <tr key={b._id}>
                             <td>
                               <strong>{b.name}</strong><br/>
                               <span className={styles.muted}>{b.phone}</span>
                             </td>
                             <td>
                               <strong>{b.serviceType}</strong><br/>
                               <span className={styles.muted}>{new Date(b.date).toLocaleDateString()}</span>
                             </td>
                             <td><span className={styles.muted}>{b.address}</span></td>
                             <td>
                               <select 
                                 className={styles.select}
                                 style={{ width: "auto" }}
                                 value={b.status} 
                                 onChange={(e) => updateBookingStatus(b._id, e.target.value)}
                               >
                                 <option value="pending">Pending</option>
                                 <option value="confirmed">Confirmed</option>
                                 <option value="completed">Completed</option>
                                 <option value="cancelled">Cancelled</option>
                               </select>
                             </td>
                             <td>
                               <button className={styles.deleteBtn} onClick={() => deleteBooking(b._id)}>
                                 Delete
                               </button>
                             </td>
                           </tr>
                         ))}
                         {bookings.length === 0 && <tr><td colSpan="5">No bookings found.</td></tr>}
                       </tbody>
                     </table>
                   </div>
                 </div>
               )}

               {/* Services Tab */}
               {activeTab === 'services' && (
                 <>
                   <div className={styles.formBox}>
                     <h3 className={styles.sectionTitle}>{editId ? "Edit Service" : "Add New Service"}</h3>
                     {svcMsg && <div className={styles.message}>{svcMsg}</div>}
                     <form onSubmit={handleSvcSubmit} className={styles.formGrid}>
                       <div>
                         <label>Title</label>
                         <input required value={svcForm.title} onChange={e => setSvcForm({...svcForm, title: e.target.value})} />
                       </div>
                       <div>
                         <label>Category</label>
                         <input required value={svcForm.category} onChange={e => setSvcForm({...svcForm, category: e.target.value})} />
                       </div>
                       <div>
                         <label>Price (₹)</label>
                         <input type="number" required value={svcForm.price} onChange={e => setSvcForm({...svcForm, price: e.target.value})} />
                       </div>
                       <div>
                         <label>Icon (Emoji)</label>
                         <input value={svcForm.icon} onChange={e => setSvcForm({...svcForm, icon: e.target.value})} />
                       </div>
                       <div className={styles.fullWidth}>
                         <label>Description</label>
                         <textarea required rows="2" value={svcForm.description} onChange={e => setSvcForm({...svcForm, description: e.target.value})}></textarea>
                       </div>
                       <div className={styles.fullWidth}>
                         <label>Sub-services <span className={styles.muted}>(comma-separated)</span></label>
                         <input value={svcForm.subServices} onChange={e => setSvcForm({...svcForm, subServices: e.target.value})} />
                       </div>
                       <div className={styles.formActions}>
                         <button type="submit" className={styles.primaryBtn}>{editId ? "Update Service" : "Add Service"}</button>
                         {editId && <button type="button" className={styles.secondaryBtn} onClick={() => { setEditId(null); setSvcForm({ title:"", category:"", description:"", price:"", icon:"🔧", subServices:"" }); }}>Cancel Edit</button>}
                       </div>
                     </form>
                   </div>

                   <div className={styles.serviceGrid}>
                     {services.map(svc => (
                       <div key={svc._id} className={styles.serviceCard}>
                         <div className={styles.serviceTop}>
                           <div className={styles.serviceIcon}>{svc.icon}</div>
                           <div className={styles.servicePrice}>₹{svc.price}</div>
                         </div>
                         <h4>{svc.title}</h4>
                         <p>{svc.description}</p>
                         <div className={styles.cardActions}>
                           <button className={styles.secondaryBtn} style={{ flex: 1 }} onClick={() => editService(svc)}>Edit</button>
                           <button className={styles.deleteBtn} style={{ flex: 1 }} onClick={() => deleteService(svc._id)}>Delete</button>
                         </div>
                       </div>
                     ))}
                   </div>
                 </>
               )}

               {/* Users Tab */}
               {activeTab === 'users' && (
                 <div className={styles.sectionBox}>
                   <div className={styles.tableWrap}>
                     <table className={styles.table}>
                       <thead>
                         <tr>
                           <th>Name</th>
                           <th>Email</th>
                           <th>Join Date</th>
                         </tr>
                       </thead>
                       <tbody>
                         {users.map(u => (
                           <tr key={u._id}>
                             <td><strong>{u.name}</strong></td>
                             <td>{u.email}</td>
                             <td>{new Date(u.createdAt).toLocaleDateString()}</td>
                           </tr>
                         ))}
                         {users.length === 0 && <tr><td colSpan="3">No users found.</td></tr>}
                       </tbody>
                     </table>
                   </div>
                 </div>
               )}

             </>
          )}
        </div>
      </main>
    </div>
  );
}