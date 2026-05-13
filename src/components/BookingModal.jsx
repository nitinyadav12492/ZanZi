// src/components/BookingModal.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../api/axios";

const SERVICE_TYPES = [
  "Home Services","Electrical Work","AC & Appliances",
  "Plumbing Work","Welding Work","Home Decor","Garden Work","Staff Services",
];

export default function BookingModal({ onClose, preSelected = "" }) {
  const { user }   = useAuth();
  const navigate   = useNavigate();
  const [form, setForm] = useState({
    name: user?.name || "", phone: "", address: "",
    serviceType: preSelected || "", date: "", notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError]     = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) { onClose(); navigate("/login"); return; }
    setLoading(true); setError("");
    try {
      await api.post("/bookings", form);
      setSuccess(true);
      setTimeout(onClose, 2200);
    } catch (err) {
      setError(err.response?.data?.message || "Booking failed. Try again.");
    } finally { setLoading(false); }
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="modal-header">
          <h2>📅 Book a Service</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          {success ? (
            <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
              <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>✅</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", marginBottom: "0.5rem" }}>Booking Confirmed!</h3>
              <p style={{ color: "var(--text-muted)" }}>We'll contact you shortly to confirm your appointment.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {error && <div className="alert alert-error">{error}</div>}
              {!user && (
                <div className="alert" style={{ background: "#FEF3C7", color: "#92400E", border: "1px solid #FDE68A" }}>
                  ⚠️ You'll be redirected to login first.
                </div>
              )}
              <div className="form-group">
                <label>Full Name *</label>
                <input name="name" className="form-control" required value={form.name} onChange={handleChange} placeholder="Your full name" />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input name="phone" type="tel" className="form-control" required value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="form-group">
                <label>Address *</label>
                <textarea name="address" className="form-control" required rows={2} value={form.address} onChange={handleChange} placeholder="Full address with landmark" />
              </div>
              <div className="form-group">
                <label>Service Type *</label>
                <select name="serviceType" className="form-control" required value={form.serviceType} onChange={handleChange}>
                  <option value="">— Select a Service —</option>
                  {SERVICE_TYPES.map((s) => <option key={s} value={s}>{s}</option>)}
                  {preSelected && !SERVICE_TYPES.includes(preSelected) && (
                    <option value={preSelected}>{preSelected.length > 40 ? preSelected.substring(0, 37) + "..." : preSelected}</option>
                  )}
                </select>
              </div>
              <div className="form-group">
                <label>Preferred Date *</label>
                <input name="date" type="date" className="form-control" required value={form.date} onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]} />
              </div>
              <div className="form-group">
                <label>Additional Notes</label>
                <textarea name="notes" className="form-control" rows={2} value={form.notes} onChange={handleChange} placeholder="Any specific requirements..." />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", padding: "0.9rem" }} disabled={loading}>
                {loading ? "Booking..." : "Confirm Booking 🎯"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}