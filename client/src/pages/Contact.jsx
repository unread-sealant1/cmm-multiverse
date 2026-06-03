import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-secondary/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">build</span> together
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {[
                { icon: <Mail size={20} />, label: "Email", value: "cmmmultiverse@gmail.com" },
                { icon: <Phone size={20} />, label: "Phone / WhatsApp", value: "+27 66 454 0199" },
                { icon: <MapPin size={20} />, label: "Head Office", value: "Modjadji, South Africa" },
                { icon: <MapPin size={20} />, label: "Branch", value: "Bedfordview, Gauteng" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/20 text-brand-primary flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase font-bold">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {submitted ? (
              <div className="p-12 rounded-3xl bg-gradient-to-br from-green-500/20 to-brand-primary/20 border border-green-500/30 text-center backdrop-blur-sm">
                <CheckCircle2 size={64} className="text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-white/60">Thank you for reaching out. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase text-white/40 ml-1 mb-2 block">First Name</label>
                    <input type="text" required className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-primary outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-white/40 ml-1 mb-2 block">Last Name</label>
                    <input type="text" required className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-primary outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase text-white/40 ml-1 mb-2 block">Email</label>
                  <input type="email" required className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-primary outline-none transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase text-white/40 ml-1 mb-2 block">Message</label>
                  <textarea rows={5} required className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-primary outline-none transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full py-4 rounded-xl bg-brand-primary text-white font-bold hover:bg-brand-secondary transition-all flex items-center justify-center gap-2">
                  <Send size={18} /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
