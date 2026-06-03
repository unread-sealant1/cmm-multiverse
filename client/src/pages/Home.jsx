import { motion } from "framer-motion";
import { ArrowRight, Cpu, Globe, Layout, Rocket, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-secondary",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
    outline: "border border-white/20 text-white hover:bg-white/5",
  };
  return (
    <button className={`px-6 py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2 ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionTitle = ({ children, subtitle }) => (
  <div className="text-center mb-16">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
    >
      {children}
    </motion.h2>
    {subtitle && <p className="text-white/60 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Home = () => {
  const services = [
    { title: "Full-Stack Development", desc: "End-to-end digital solutions built for scale and performance.", icon: <Globe /> },
    { title: "UI/UX Design", desc: "Intuitive, futuristic interfaces that prioritize user experience.", icon: <Layout /> },
    { title: "Business Digitalization", desc: "Transforming traditional operations into streamlined digital workflows.", icon: <Zap /> },
    { title: "Scalable Systems", desc: "Robust architectures capable of handling rapid growth.", icon: <Cpu /> },
    { title: "Tech Innovation", desc: "Exploring the edge of what is possible with future-ready tech.", icon: <Rocket /> },
    { title: "Venture Development", desc: "Incubating and launching high-impact technology ventures.", icon: <Zap /> },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-primary/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-secondary/20 blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-tight">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">scalable</span> digital experiences <br /> and technology ventures.
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            CMM Multiverse is a technology company focused on full-stack development, digital innovation, and future-ready tech ventures.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/projects">
              <Button variant="primary">View Projects <ArrowRight size={18} /></Button>
            </Link>
            <Link to="/ventures/leikantse-tech">
              <Button variant="secondary">Explore Leikantse Tech</Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Innovating for the Future</h2>
            <p className="text-white/60 leading-relaxed">
              We do not just build software; we architect ecosystems. Founded by <strong className="text-white">Cassidy Mahlatse Masila</strong>, CMM Multiverse operates at the intersection of creativity and engineering, delivering high-performance digital products that empower businesses to scale effortlessly.
            </p>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-sm text-brand-primary font-bold uppercase tracking-widest mb-2">Our Approach</p>
              <p className="text-white/80 italic">&ldquo;Complexity simplified. Performance amplified.&rdquo;</p>
            </div>
          </motion.div>
          <div className="relative group">
            <div className="absolute inset-0 bg-brand-primary/30 blur-3xl rounded-full group-hover:bg-brand-secondary/30 transition-colors" />
            <div className="relative aspect-square rounded-3xl bg-white/5 border border-white/20 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
              <img src="/cmm-hero.PNG" alt="CMM Multiverse" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Our core competencies designed to drive digital transformation.">
            What We Do
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-all group cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 text-brand-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-white/60 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <SectionTitle subtitle="Expanding our reach through strategic technology ventures.">
          Our Ventures
        </SectionTitle>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/40 to-brand-secondary/40 opacity-60 group-hover:opacity-80 transition-opacity" />
          <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Leikantse Tech</h3>
              <p className="text-lg text-white/80 mb-8">
                A premium hardware and technical support venture specializing in consumer electronics, device repairs, and expert tech support.
              </p>
              <Link to="/ventures/leikantse-tech">
                <Button variant="primary">Visit Venture <ArrowRight size={18} /></Button>
              </Link>
            </div>
            <div className="w-full md:w-1/3 aspect-video rounded-2xl border border-white/20 overflow-hidden group-hover:rotate-2 transition-transform">
               <img src="/leikantse-hero.PNG" alt="Leikantse Tech" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-gradient-to-b from-brand-primary to-brand-secondary relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
           <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Ready to evolve your digital presence?</h2>
           <p className="text-white/80 text-lg mb-10 relative z-10 max-w-xl mx-auto">
             Let us build something that does not just work, but leads the industry.
           </p>
           <div className="flex flex-wrap justify-center gap-4 relative z-10">
             <Link to="/contact">
               <Button variant="secondary" className="bg-white text-brand-primary hover:bg-white/90">Get in Touch</Button>
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
