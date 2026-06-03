import { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, Wrench, Package, Clock, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
  };
  return (
    <button className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const LeikantseHome = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="relative min-h-screen bg-[#0F1115] text-white pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <Clock size={12} /> Coming Soon
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-tight">
            <span className="text-blue-500">Leikantse Tech</span>
            <br />
            <span className="text-3xl md:text-4xl font-bold text-white/60">Your Trusted Tech Destination</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            We are building South Africa&rsquo;s most reliable platform for premium devices, accessories, and expert repair services. 
            Stay tuned for a launch that will redefine your tech experience.
          </p>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-400"
            >
              <CheckCircle2 size={20} /> You&rsquo;re on the list! We&rsquo;ll notify you at <strong>{email}</strong>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for launch updates"
                required
                className="flex-1 p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-blue-500 outline-none transition-colors"
              />
              <Button variant="primary" type="submit" className="px-8">Notify Me</Button>
            </form>
          )}
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-32">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Smartphone size={28} />,
              title: "Premium Devices",
              items: ["Latest smartphones & tablets", "High-performance laptops", "Certified refurbished gear"],
            },
            {
              icon: <Package size={28} />,
              title: "Tech Accessories",
              items: ["Chargers, cases & cables", "Gaming peripherals", "Professional-grade tools"],
            },
            {
              icon: <Wrench size={28} />,
              title: "Expert Repairs",
              items: ["Screen & battery replacements", "Water damage recovery", "Micro-soldering & data recovery"],
            },
          ].map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {col.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/60 text-sm">
                    <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-24">
        <div className="p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 backdrop-blur-sm text-center">
          <Sparkles size={32} className="text-blue-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What&rsquo;s Coming?</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">
            Leikantse Tech will offer end-to-end technology solutions — from sourcing the latest devices at competitive 
            prices to providing professional repair services with genuine parts and warranties. We are also building 
            an online store for convenient shopping and nationwide delivery.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            {[
              { label: "Online Store", desc: "Shop devices & accessories from anywhere" },
              { label: "Nationwide Delivery", desc: "Fast shipping across South Africa" },
              { label: "Repair Warranty", desc: "Up to 6 months on all repairs" },
            ].map((item) => (
              <div key={item.label} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-blue-400 font-bold mb-1">{item.label}</p>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm"
        >
          Back to CMM Multiverse <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default LeikantseHome;
