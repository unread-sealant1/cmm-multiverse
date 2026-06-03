import { useState } from "react";
import { Lock, LogIn } from "lucide-react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || ""}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      localStorage.setItem("admin_token", data.token);
      onLogin(data.user);
    } catch {
      setError("Could not connect to server");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0A0A0A",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <form onSubmit={handleSubmit} style={{
        background: "#1E1E1E",
        padding: "48px",
        borderRadius: "24px",
        width: "100%",
        maxWidth: "400px",
        border: "1px solid rgba(255,255,255,0.1)",
      }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <Lock size={32} color="#0066FF" />
          <h1 style={{ color: "#fff", fontSize: "24px", marginTop: "16px" }}>CMM Admin</h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>Sign in to manage your projects</p>
        </div>

        {error && (
          <div style={{
            background: "rgba(255,0,0,0.1)",
            border: "1px solid rgba(255,0,0,0.3)",
            color: "#ff4444",
            padding: "12px",
            borderRadius: "12px",
            fontSize: "14px",
            marginBottom: "16px",
          }}>
            {error}
          </div>
        )}

        <div style={{ marginBottom: "16px" }}>
          <label style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", marginLeft: "4px", display: "block", marginBottom: "8px" }}>
            Email / Username
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
              fontSize: "16px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", marginLeft: "4px", display: "block", marginBottom: "8px" }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
              fontSize: "16px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        <button type="submit" style={{
          width: "100%",
          padding: "16px",
          borderRadius: "12px",
          background: "#0066FF",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}>
          <LogIn size={18} /> Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
