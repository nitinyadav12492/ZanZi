// src/pages/Signup.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const { signup, verifyEmail, resendOTP, loading, error, setError, pendingEmail } = useAuth();
  const navigate = useNavigate();
  const [showVerification, setShowVerification] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", confirm: "" });
  const [otp, setOtp] = useState("");
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
      setShowVerification(true);
    } catch {}
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!otp || otp.length !== 6) {
      setFormError("Please enter a valid 6-digit code");
      return;
    }

    try {
      await verifyEmail(pendingEmail, otp, { name: form.name, email: form.email, phone: form.phone, password: form.password });
      navigate("/");
    } catch {}
  };

  const handleResendOTP = async () => {
    try {
      await resendOTP(pendingEmail);
      setFormError("");
      setOtp("");
    } catch {}
  };

  if (showVerification) {
    return (
      <div style={styles.page}>
        <div style={styles.card}>
          <div style={styles.header}>
            <div style={styles.logo}>⚡ <span style={{ color: "var(--primary)" }}>Zanzee</span></div>
            <h1 style={styles.title}>Verify Email</h1>
            <p style={styles.sub}>We sent a code to {pendingEmail}</p>
          </div>

          {(error || formError) && <div className="alert alert-error">{error || formError}</div>}

          <form onSubmit={handleVerify}>
            <div className="form-group" style={{ textAlign: "center" }}>
              <label>Verification Code</label>
              <input 
                type="text" 
                maxLength="6" 
                className="form-control" 
                required 
                value={otp} 
                onChange={(e) => { setOtp(e.target.value.replace(/\D/g, "")); setError(null); setFormError(""); }}
                placeholder="000000" 
                style={{ fontSize: "24px", letterSpacing: "4px", textAlign: "center", fontWeight: "bold" }}
              />
              <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "0.5rem" }}>Check your email for the 6-digit code</p>
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}
              style={{ width: "100%", justifyContent: "center", padding: "0.9rem", marginTop: "1.2rem" }}>
              {loading ? "Verifying..." : "Verify Email"}
            </button>
          </form>

          <p style={styles.switchLink}>
            Didn't receive the code? <a onClick={handleResendOTP} style={{ color: "var(--primary)", fontWeight: 600, cursor: "pointer" }}>Resend</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.logo}>⚡ <span style={{ color: "var(--primary)" }}>Zanzee</span></div>
          <h1 style={styles.title}>Create Account</h1>
          <p style={styles.sub}>Join thousands of happy homeowners.</p>
        </div>

        {(error || formError) && <div className="alert alert-error">{error || formError}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input name="name" className="form-control" required value={form.name} onChange={handleChange} placeholder="Your full name" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input name="email" type="email" className="form-control" required value={form.email} onChange={handleChange} placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input name="phone" type="tel" className="form-control" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label>Password</label>
              <input name="password" type="password" className="form-control" required value={form.password} onChange={handleChange} placeholder="Min 6 chars" />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label>Confirm Password</label>
              <input name="confirm" type="password" className="form-control" required value={form.confirm} onChange={handleChange} placeholder="Repeat password" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}
            style={{ width: "100%", justifyContent: "center", padding: "0.9rem", marginTop: "1.2rem" }}>
            {loading ? "Sending code..." : "Continue"}
          </button>
        </form>

        <p style={styles.switchLink}>
          Already have an account? <Link to="/login" style={{ color: "var(--primary)", fontWeight: 600 }}>Sign In</Link>
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
    width: "100%", maxWidth: "480px", boxShadow: "var(--shadow-lg)",
  },
  header: { textAlign: "center", marginBottom: "1.8rem" },
  logo: { fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 900, marginBottom: "1rem" },
  title: { fontFamily: "var(--font-display)", fontSize: "1.7rem", fontWeight: 900, marginBottom: "0.4rem" },
  sub: { color: "var(--text-muted)", fontSize: "0.95rem" },
  switchLink: { textAlign: "center", fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "1.2rem" },
};