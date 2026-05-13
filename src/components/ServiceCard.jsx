// // src/components/ServiceCard.jsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function ServiceCard({ icon, title, description, subServices, color }) {
//   const [hovered, setHovered]     = useState(false);
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     const slug = title.toLowerCase().replace(/\s+/g, '-');
//     navigate(`/service/${slug}`);
//   };

//   return (
//     <div
//       className="card"
//       style={{ ...styles.card, borderTop: `4px solid ${color}`, cursor: 'pointer' }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onClick={handleCardClick}
//     >
//       {/* Icon */}
//       <div style={{ ...styles.iconWrap, background: color + "18", color }}>
//         {icon}
//       </div>

//       {/* Content */}
//       <h3 style={styles.title}>{title}</h3>
//       <p style={styles.desc}>{description}</p>

//       {/* Sub-services */}
//       <ul style={styles.subList}>
//         {subServices.map((s) => (
//           <li key={s} style={styles.subItem}>
//             <span style={{ color, fontSize: "0.7rem" }}>●</span> {s}
//           </li>
//         ))}
//       </ul>

//       {/* CTA */}
//       <button
//         className="btn btn-primary btn-sm"
//         style={{ ...styles.bookBtn, background: color, boxShadow: `0 4px 12px ${color}44`, pointerEvents: 'none' }}
//       >
//         View Services →
//       </button>
//     </div>
//   );
// }

// const styles = {
//   card: {
//     padding: "1.8rem 1.5rem",
//     display: "flex", flexDirection: "column", gap: "0.75rem",
//     height: "100%",
//   },
//   iconWrap: {
//     width: "56px", height: "56px", borderRadius: "14px",
//     display: "flex", alignItems: "center", justifyContent: "center",
//     fontSize: "1.8rem", marginBottom: "0.5rem",
//   },
//   title: {
//     fontFamily: "var(--font-display)", fontWeight: 800,
//     fontSize: "1.2rem", color: "var(--secondary)",
//   },
//   desc: { fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 },
//   subList: { listStyle: "none", display: "flex", flexDirection: "column", gap: "0.3rem", flexGrow: 1 },
//   subItem: { fontSize: "0.85rem", color: "var(--text)", display: "flex", alignItems: "center", gap: "0.5rem" },
//   bookBtn: { marginTop: "auto", alignSelf: "flex-start" },
// };
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