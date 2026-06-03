import { useState, useEffect } from "react";
import { Plus, LogOut, Edit3, Trash2, ExternalLink } from "lucide-react";

const Dashboard = ({ user, onLogout }) => {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: "", desc: "", tags: "", live: "", image: null });
  const [preview, setPreview] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const API = import.meta.env.VITE_API_URL || "";
      const res = await fetch(`${API}/api/admin/projects`);
      const data = await res.json();
      setProjects(data);
    } catch {
      console.error("Failed to fetch projects");
    }
  };

  const resetForm = () => {
    setForm({ title: "", desc: "", tags: "", live: "", image: null });
    setPreview("");
    setEditing(null);
    setShowForm(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("admin_token");
    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("desc", form.desc);
    fd.append("tags", form.tags);
    fd.append("live", form.live);
    if (form.image) fd.append("image", form.image);

    const url = editing ? `/api/admin/projects/${editing}` : "/api/admin/projects";
    const method = editing ? "PUT" : "POST";

    try {
      const API = import.meta.env.VITE_API_URL || "";
      const res = await fetch(`${API}${url}`, {
        method,
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      });
      if (res.ok) {
        resetForm();
        fetchProjects();
      }
    } catch {
      console.error("Failed to save project");
    }
  };

  const handleEdit = (p) => {
    setForm({
      title: p.title,
      desc: p.desc,
      tags: p.tags?.join(", ") || "",
      live: p.live || "",
      image: null,
    });
    const API = import.meta.env.VITE_API_URL || "";
    setPreview(p.image ? `${API}/uploads/${p.image}` : "");
    setEditing(p.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this project?")) return;
    const token = localStorage.getItem("admin_token");
    try {
      const API = import.meta.env.VITE_API_URL || "";
      const res = await fetch(`${API}/api/admin/projects/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) fetchProjects();
    } catch {
      console.error("Failed to delete project");
    }
  };

  const s = {
    container: { minHeight: "100vh", background: "#0A0A0A", color: "#fff", fontFamily: "system-ui, -apple-system, sans-serif" },
    header: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 32px", borderBottom: "1px solid rgba(255,255,255,0.1)" },
    btn: { padding: "10px 20px", borderRadius: "10px", border: "none", cursor: "pointer", fontWeight: "bold", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "6px" },
    input: { width: "100%", padding: "12px", borderRadius: "10px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: "14px", outline: "none", boxSizing: "border-box", marginTop: "6px" },
    label: { color: "rgba(255,255,255,0.4)", fontSize: "11px", fontWeight: "bold", textTransform: "uppercase" },
    card: { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", overflow: "hidden" },
  };

  return (
    <div style={s.container}>
      <div style={s.header}>
        <div>
          <h1 style={{ margin: 0, fontSize: "20px" }}>Projects</h1>
          <p style={{ margin: "4px 0 0", color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>{user?.email}</p>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={() => { resetForm(); setShowForm(true); }} style={{ ...s.btn, background: "#0066FF", color: "#fff" }}>
            <Plus size={16} /> Add Project
          </button>
          <button onClick={onLogout} style={{ ...s.btn, background: "rgba(255,255,255,0.1)", color: "#fff" }}>
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      <div style={{ padding: "32px", maxWidth: "960px", margin: "0 auto" }}>
        {showForm && (
          <form onSubmit={handleSubmit} style={{ ...s.card, padding: "24px", marginBottom: "32px" }}>
            <h2 style={{ margin: "0 0 20px", fontSize: "16px", color: "rgba(255,255,255,0.8)" }}>
              {editing ? "Edit Project" : "New Project"}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <div>
                <label style={s.label}>Title</label>
                <input style={s.input} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
              </div>
              <div>
                <label style={s.label}>Live URL</label>
                <input style={s.input} value={form.live} onChange={(e) => setForm({ ...form, live: e.target.value })} placeholder="https://" />
              </div>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label style={s.label}>Description</label>
              <textarea style={{ ...s.input, resize: "vertical", minHeight: "80px" }} value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} required />
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label style={s.label}>Tags (comma separated)</label>
              <input style={s.input} value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} placeholder="React, Node, CSS" />
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label style={s.label}>Image</label>
              <input type="file" accept="image/*" onChange={handleImageChange} style={{ ...s.input, padding: "8px" }} />
              {preview && <img src={preview} alt="preview" style={{ width: "120px", height: "80px", objectFit: "cover", borderRadius: "8px", marginTop: "8px" }} />}
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button type="submit" style={{ ...s.btn, background: "#0066FF", color: "#fff" }}>
                {editing ? "Update" : "Create"} Project
              </button>
              <button type="button" onClick={resetForm} style={{ ...s.btn, background: "rgba(255,255,255,0.1)", color: "#fff" }}>
                Cancel
              </button>
            </div>
          </form>
        )}

        <div style={{ display: "grid", gap: "16px" }}>
          {projects.length === 0 && !showForm && (
            <p style={{ textAlign: "center", color: "rgba(255,255,255,0.3)", padding: "48px" }}>
              No projects yet. Click "Add Project" to get started.
            </p>
          )}
          {projects.map((p) => (
            <div key={p.id} style={s.card}>
              <div style={{ display: "flex", gap: "16px", padding: "16px" }}>
                {p.image && (
                  <img src={`${import.meta.env.VITE_API_URL || ""}/uploads/${p.image}`} alt={p.title} style={{ width: "100px", height: "70px", objectFit: "cover", borderRadius: "10px", flexShrink: 0 }} />
                )}
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                    <div>
                      <h3 style={{ margin: 0, fontSize: "16px" }}>{p.title}</h3>
                      <p style={{ margin: "4px 0 0", color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>{p.desc}</p>
                      {p.tags?.length > 0 && (
                        <div style={{ display: "flex", gap: "4px", marginTop: "8px", flexWrap: "wrap" }}>
                          {p.tags.map((t) => (
                            <span key={t} style={{ fontSize: "11px", padding: "2px 8px", borderRadius: "6px", background: "rgba(0,102,255,0.15)", color: "#0066FF" }}>{t}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer" style={{ ...s.btn, background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "12px" }}>
                          <ExternalLink size={14} />
                        </a>
                      )}
                      <button onClick={() => handleEdit(p)} style={{ ...s.btn, background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>
                        <Edit3 size={14} />
                      </button>
                      <button onClick={() => handleDelete(p.id)} style={{ ...s.btn, background: "rgba(255,0,0,0.1)", color: "#ff4444", fontSize: "12px" }}>
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
