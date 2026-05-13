// src/pages/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login, loading, error, setError } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => { setError(null); setForm({ ...form, [e.target.name]: e.target.value }); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form);
      navigate("/");
    } catch {}
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.logo}>⚡ <span style={{ color: "var(--primary)" }}>Zanzee</span></div>
          <h1 style={styles.title}>Welcome Back</h1>
          <p style={styles.sub}>Sign in to your account to continue</p>
        </div>

        {error && <div className="alert alert-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input name="email" type="email" className="form-control" required
              value={form.email} onChange={handleChange} placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input name="password" type="password" className="form-control" required
              value={form.password} onChange={handleChange} placeholder="••••••••" />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}
            style={{ width: "100%", justifyContent: "center", padding: "0.9rem", marginTop: "0.5rem" }}>
            {loading ? "Signing in..." : "Sign In →"}
          </button>
        </form>

        <div style={styles.divider}><span>or</span></div>

        {/* Demo credentials hint */}
        <div style={styles.demo}>
          <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>🔑 Demo Credentials</p>
          <p>User: <code>user@test.com</code> / <code>password123</code></p>
          <p>Admin: <code>admin@zanzee.in</code> / <code>admin123</code></p>
        </div>

        <p style={styles.switchLink}>
          Don't have an account? <Link to="/signup" style={{ color: "var(--primary)", fontWeight: 600 }}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "calc(100vh - 68px)", display: "flex",
    alignItems: "center", justifyContent: "center",
    background: "linear-gradient(135deg, #f0f4ff 0%, #fff5f0 100%)",
    padding: "2rem 1rem",
  },
  card: {
    background: "#fff", borderRadius: "var(--radius)", padding: "2.5rem",
    width: "100%", maxWidth: "440px", boxShadow: "var(--shadow-lg)",
  },
  header: { textAlign: "center", marginBottom: "1.8rem" },
  logo: { fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 900, marginBottom: "1rem" },
  title: { fontFamily: "var(--font-display)", fontSize: "1.7rem", fontWeight: 900, marginBottom: "0.4rem" },
  sub: { color: "var(--text-muted)", fontSize: "0.95rem" },
  divider: {
    display: "flex", alignItems: "center", gap: "1rem",
    color: "var(--text-muted)", fontSize: "0.85rem", margin: "1.2rem 0",
    "::before": { content: "''", flex: 1, height: "1px", background: "var(--border)" },
    "::after": { content: "''", flex: 1, height: "1px", background: "var(--border)" },
  },
  demo: {
    background: "var(--primary-light)", borderRadius: "var(--radius-sm)",
    padding: "0.9rem 1rem", fontSize: "0.85rem", color: "var(--text)",
    marginBottom: "1rem", lineHeight: 1.8,
  },
  switchLink: { textAlign: "center", fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "1rem" },
};