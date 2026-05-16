// 
// src/pages/Signup.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const { signup, loading, error, setError } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", confirm: "" });
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    setError(null);
    setFormError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      setFormError("Passwords do not match");
      return;
    }
    if (form.password.length < 6) {
      setFormError("Password must be at least 6 characters");
      return;
    }
    try {
      await signup({ name: form.name, email: form.email, phone: form.phone, password: form.password });
      navigate("/");
    } catch {}
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.logo}>⚡ <span style={{ color: "var(--primary)" }}>Zanzee</span></div>
          <h1 style={styles.title}>Create Account</h1>
          <p style={styles.sub}>Join thousands of happy homeowners.</p>
        </div>

        {(error || formError) && (
          <div className="alert alert-error">{error || formError}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              name="name"
              className="form-control"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              name="phone"
              type="tel"
              className="form-control"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label>Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                required
                value={form.password}
                onChange={handleChange}
                placeholder="Min 6 chars"
              />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label>Confirm Password</label>
              <input
                name="confirm"
                type="password"
                className="form-control"
                required
                value={form.confirm}
                onChange={handleChange}
                placeholder="Repeat password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
            style={{ width: "100%", justifyContent: "center", padding: "0.9rem", marginTop: "1.2rem" }}
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p style={styles.switchLink}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "var(--primary)", fontWeight: 600 }}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "calc(100vh - 68px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #f0f4ff 0%, #fff5f0 100%)",
    padding: "2rem 1rem",
  },
  card: {
    background: "#fff",
    borderRadius: "var(--radius)",
    padding: "2.5rem",
    width: "100%",
    maxWidth: "480px",
    boxShadow: "var(--shadow-lg)",
  },
  header: { textAlign: "center", marginBottom: "1.8rem" },
  logo: {
    fontFamily: "var(--font-display)",
    fontSize: "1.8rem",
    fontWeight: 900,
    marginBottom: "1rem",
  },
  title: {
    fontFamily: "var(--font-display)",
    fontSize: "1.7rem",
    fontWeight: 900,
    marginBottom: "0.4rem",
  },
  sub: { color: "var(--text-muted)", fontSize: "0.95rem" },
  switchLink: {
    textAlign: "center",
    fontSize: "0.9rem",
    color: "var(--text-muted)",
    marginTop: "1.2rem",
  },
};