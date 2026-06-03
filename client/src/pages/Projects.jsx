import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-secondary/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Projects</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A showcase of our work across full-stack development and technology ventures.
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center text-white/30 py-20">Loading projects...</div>
        ) : projects.length === 0 ? (
          <div className="text-center text-white/30 py-20">
            <p className="text-lg">No projects yet.</p>
            <p className="text-sm mt-2">Projects added from the admin panel will appear here.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all"
              >
                <div className="h-48 overflow-hidden bg-white/5">
                  {p.image ? (
                    <img src={`/uploads/${p.image}`} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl font-black text-white/10 select-none">
                      {p.title.split(" ")[0]}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-[10px] px-2 py-1 rounded-full bg-brand-primary/20 text-brand-primary font-bold uppercase">Featured</span>
                  <h3 className="text-xl font-bold mt-3 mb-2">{p.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{p.desc}</p>
                  {p.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-lg bg-white/10 text-white/60">{tag}</span>
                      ))}
                    </div>
                  )}
                  {p.live && (
                    <div className="flex gap-3">
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/40 hover:text-brand-primary transition-colors"><ArrowUpRight size={14} /> Live</a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
