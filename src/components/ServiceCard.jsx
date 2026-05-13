
import { useNavigate } from "react-router-dom";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({ id, icon, title, description, subServices = [], price }) {
  const navigate = useNavigate();

  const handleClick = () => {
    const slug = id || title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/service/${slug}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        {/* Icon (optional text/emoji) - Default to placeholder */}
        <div className={styles.iconBox}>
          {icon || "🔧"}
        </div>
        
        {/* Static 'Verified' Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px", backgroundColor: "#e0f2fe", color: "#0ea5e9", padding: "4px 8px", borderRadius: "12px", fontSize: "12px", fontWeight: "600" }}>
          <span>✓</span>
          <span>Verified</span>
        </div>
      </div>

      {/* Title */}
      <h3 className={styles.title}>{title}</h3>

      {/* Price */}
      {price && (
        <div style={{ fontSize: "16px", fontWeight: "bold", color: "#66116f", marginTop: "-4px" }}>
          ₹{price}
        </div>
      )}

      {/* Description */}
      <p className={styles.desc}>{description}</p>

      {/* Sub Services */}
      <ul className={styles.list}>
        {subServices.map((item) => (
          <li key={item} className={styles.listItem}>
            <span className={styles.dot}></span>
            {item}
          </li>
        ))}
      </ul>

      {/* Static Book Now Button */}
      <button className={styles.button} onClick={(e) => { e.stopPropagation(); handleClick(); }}>
        Book Now
      </button>
    </div>
  );
}