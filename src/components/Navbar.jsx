import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { Search, Menu, X, User, ShoppingCart } from "lucide-react";
import servicesData from "./data/ServiceData";
import styles from "./Navbar.module.css";

const nameToParamMap = {
  "HOME SERVICE": "home",
  "ELECTRICAL WORK": "electrical",
  "AC & APPLIANCE": "ac",
  "PLUMBING WORK": "plumbing",
  "WELDING WORK": "welding",
  "HOME DECOR": "decor",
  "GARDEN WORK": "garden",
  "CLEANING": "staff"
};

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const cartItemCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const navigate  = useNavigate();
  const location  = useLocation();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleLogout = () => { logout(); navigate("/"); setOpen(false); };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const q = query.toLowerCase();
    const results = [];

    // Search categories
    Object.keys(servicesData).forEach((cat) => {
      if (cat.toLowerCase().includes(q)) {
        results.push({
          type: "category",
          title: cat,
          subtitle: "Category",
          url: `/service/${nameToParamMap[cat] || "electrical"}`
        });
      }
      
      // Search sub-services
      servicesData[cat].services.forEach((svc) => {
        if (svc.name.toLowerCase().includes(q) || (svc.desc && svc.desc.toLowerCase().includes(q))) {
          results.push({
            type: "service",
            title: svc.name,
            subtitle: `in ${cat}`,
            url: `/service/${nameToParamMap[cat] || "electrical"}`
          });
        }
      });
    });

    setSearchResults(results.slice(0, 6)); // Limit to 6 results
  };

  const handleResultClick = (url) => {
    navigate(url);
    setSearchQuery("");
    setSearchResults([]);
    setOpen(false);
  };

  const navLinks = [
    { label: "Home",     to: "/" },
    { label: "Services", to: "/#services" },
    { label: "About",    to: "/#about" },
    { label: "Contact",  to: "/#contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>Z</div>
          <span className={styles.logoText}>Zanzee</span>
        </Link>

        {/* Search Bar (Desktop) */}
        <div className={styles.searchBox}>
          <Search className={styles.searchIcon} size={16} />
          <input 
            type="text" 
            placeholder="Search services..." 
            value={searchQuery}
            onChange={handleSearch}
          />
          {searchResults.length > 0 && searchQuery && (
             <div className={styles.searchResults}>
                {searchResults.map((res, i) => (
                   <div key={i} className={styles.searchResultItem} onClick={() => handleResultClick(res.url)}>
                      <span className={styles.resTitle}>{res.title}</span>
                      <span className={styles.resSubtitle}>{res.subtitle}</span>
                   </div>
                ))}
             </div>
          )}
        </div>

        {/* Desktop Links & Auth */}
        <div className={styles.desktopMenu}>
          <div className={styles.navLinks}>
            {navLinks.map((l) => (
              <Link 
                key={l.label} 
                to={l.to} 
                className={styles.navLink}
                style={location.pathname === l.to ? { color: '#4f46e5', background: '#f3f4f6' } : {}}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className={styles.authSection}>
            <Link to="/cart" style={{ position: 'relative', display: 'flex', alignItems: 'center', color: '#374151', textDecoration: 'none', marginRight: '6px' }}>
              <ShoppingCart size={22} />
              {cartItemCount > 0 && (
                <span style={{ position: 'absolute', top: '-6px', right: '-8px', background: '#e11d48', color: 'white', fontSize: '10px', fontWeight: 'bold', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {cartItemCount}
                </span>
              )}
            </Link>

            {user ? (
              <>
                <Link to={user.role === "admin" ? "/admin" : "/dashboard"} className={styles.userBtn}>
                  <User size={16} />
                  <span>{user.name.split(" ")[0]}</span>
                </Link>
                <button onClick={handleLogout} className={styles.logoutBtn}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className={styles.loginBtn}>Log in</Link>
                <Link to="/signup" className={styles.signupBtn}>Sign up</Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Header Icons */}
        <div className={styles.mobileNavActions}>
          <Link to="/cart" style={{ position: 'relative', display: 'flex', alignItems: 'center', color: '#374151', textDecoration: 'none' }}>
            <ShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span style={{ position: 'absolute', top: '-4px', right: '-6px', background: '#e11d48', color: 'white', fontSize: '10px', fontWeight: 'bold', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {cartItemCount}
              </span>
            )}
          </Link>
          <button onClick={() => setOpen(!open)} className={styles.menuBtn} style={{ display: 'block' }}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileSearch}>
            <Search className={styles.searchIcon} size={16} style={{top: '12px'}} />
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={handleSearch}
            />
            {searchResults.length > 0 && searchQuery && (
               <div className={styles.mobileSearchResults}>
                  {searchResults.map((res, i) => (
                     <div key={i} className={styles.searchResultItem} onClick={() => handleResultClick(res.url)}>
                        <span className={styles.resTitle}>{res.title}</span>
                        <span className={styles.resSubtitle}>{res.subtitle}</span>
                     </div>
                  ))}
               </div>
            )}
          </div>
          
          <div className={styles.mobileLinks}>
            {navLinks.map((l) => (
              <Link 
                key={l.label} 
                to={l.to} 
                className={styles.mobileLink}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
          
          <div className={styles.mobileAuth}>
            {user ? (
              <>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', padding: '0 8px'}}>
                  <div style={{width: '36px', height: '36px', borderRadius: '50%', background: '#eef2ff', color: '#4338ca', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{fontSize: '14px', fontWeight: 'bold'}}>{user.name}</div>
                    <div style={{fontSize: '12px', color: '#6b7280'}}>{user.email || 'User'}</div>
                  </div>
                </div>
                <Link 
                  to={user.role === "admin" ? "/admin" : "/dashboard"}
                  className={styles.mobileDashboardBtn}
                  onClick={() => setOpen(false)}
                >
                  Go to Dashboard
                </Link>
                <button onClick={handleLogout} className={styles.mobileLogoutBtn}>
                  Sign Out
                </button>
              </>
            ) : (
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px'}}>
                <Link to="/login" className={styles.mobileLoginBtn} onClick={() => setOpen(false)}>
                  Log in
                </Link>
                <Link to="/signup" className={styles.mobileSignupBtn} onClick={() => setOpen(false)}>
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}