// src/pages/Signup.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const { signup, loading, setError } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", confirm: "" });
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    if (setError) setError(null);
    setFormError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim())          { setFormError("Please enter your full name"); return; }
    if (!form.email.trim())         { setFormError("Please enter your email"); return; }
    if (form.password.length < 6)   { setFormError("Password must be at least 6 characters"); return; }
    if (form.password !== form.confirm) { setFormError("Passwords do not match"); return; }

    setSubmitting(true);
    setFormError("");

    try {
      await signup({
        name:     form.name.trim(),
        email:    form.email.trim(),
        phone:    form.phone.trim(),
        password: form.password,
      });
      navigate("/", { replace: true });
      return;
    } catch (err) {
      const msg = err?.response?.data?.message || err?.message || "Signup failed. Please try again.";
      setFormError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const isLoading = loading || submitting;

  return (
    <div style={styles.page}>


      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.logo}>⚡ <span style={{ color: "var(--primary)" }}>Zanzee</span></div>
          <h1 style={styles.title}>Create Account</h1>
          <p style={styles.sub}>Join thousands of happy homeowners.</p>
        </div>

        {formError && (
          <div style={styles.errorBox}>⚠️ {formError}</div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div style={styles.field}>
            <label style={styles.label}>Full Name *</label>
            <input name="name" type="text" style={styles.input} required
              value={form.name} onChange={handleChange}
              placeholder="Rahul Sharma" disabled={isLoading} />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Email Address *</label>
            <input name="email" type="email" style={styles.input} required
              value={form.email} onChange={handleChange}
              placeholder="you@example.com" disabled={isLoading} />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Phone Number</label>
            <input name="phone" type="tel" style={styles.input}
              value={form.phone} onChange={handleChange}
              placeholder="+91 98765 43210" disabled={isLoading} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div style={styles.field}>
              <label style={styles.label}>Password *</label>
              <input name="password" type="password" style={styles.input} required
                value={form.password} onChange={handleChange}
                placeholder="Min 6 chars" disabled={isLoading} />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Confirm *</label>
              <input name="confirm" type="password" style={styles.input} required
                value={form.confirm} onChange={handleChange}
                placeholder="Repeat" disabled={isLoading} />
            </div>
          </div>

          <button type="submit" disabled={isLoading} style={{
            ...styles.btn,
            opacity: isLoading ? 0.7 : 1,
            cursor: isLoading ? "not-allowed" : "pointer",
          }}>
            {isLoading
              ? <span style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px" }}>
                  <span style={styles.spinner}/> Creating account...
                </span>
              : "Create Account →"
            }
          </button>
        </form>

        <p style={styles.footer}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "var(--primary)", fontWeight: 600 }}>Sign In</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "calc(100vh - 68px)",
    display: "flex", alignItems: "center", justifyContent: "center",
    background: "linear-gradient(135deg, #f0f4ff 0%, #fff5f0 100%)",
    padding: "2rem 1rem",
  },
  card: {
    background: "#fff", borderRadius: "20px", padding: "2.5rem",
    width: "100%", maxWidth: "480px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.10)",
  },
  header: { textAlign: "center", marginBottom: "1.8rem" },
  logo: { fontFamily: "var(--font-display,sans-serif)", fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.8rem" },
  title: { fontFamily: "var(--font-display,sans-serif)", fontSize: "1.7rem", fontWeight: 900, marginBottom: "0.3rem", color: "#1a1a2e" },
  sub: { color: "#6b7280", fontSize: "0.95rem" },
  errorBox: {
    background: "#fef2f2", border: "1px solid #fecaca",
    borderRadius: "10px", color: "#991b1b",
    fontSize: "13px", padding: "10px 14px", marginBottom: "1rem",
  },
  field: { marginBottom: "1rem" },
  label: {
    display: "block", fontSize: "12px", fontWeight: 600,
    color: "#374151", marginBottom: "5px",
    textTransform: "uppercase", letterSpacing: "0.04em",
  },
  input: {
    width: "100%", padding: "10px 13px", borderRadius: "10px",
    border: "1px solid #e5e7eb", fontSize: "14px", color: "#111827",
    outline: "none", fontFamily: "inherit", boxSizing: "border-box",
  },
  btn: {
    width: "100%", padding: "13px", marginTop: "1.2rem",
    background: "#1a1a2e", color: "#fff", border: "none",
    borderRadius: "10px", fontSize: "15px", fontWeight: 600, fontFamily: "inherit",
  },
  spinner: {
    display: "inline-block", width: "15px", height: "15px",
    border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff",
    borderRadius: "50%", animation: "spin 0.7s linear infinite",
  },
  footer: { textAlign: "center", fontSize: "0.9rem", color: "#6b7280", marginTop: "1.2rem" },
};