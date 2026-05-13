import styles from "./UserSidebar.module.css";

export default function UserSidebar({
  activeTab,
  setActiveTab,
  onLogout,
  isMobileOpen,
  setMobileOpen,
}) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "bookings", label: "My Bookings" },
    { id: "profile", label: "Profile" },
    { id: "support", label: "Support & Help" },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
    if (setMobileOpen) setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`${styles.sidebar} ${
          isMobileOpen ? styles.open : ""
        }`}
      >
        {/* Brand */}
        <div className={styles.brand}>
          <h2>Dashboard</h2>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`${styles.navItem} ${
                  isActive ? styles.active : ""
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className={styles.footer}>
          <button onClick={onLogout} className={styles.logout}>
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}