import { motion } from "framer-motion";
import { Wrench, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const LeikantseFixing = () => {
  return (
    <div className="relative min-h-screen bg-[#0F1115] text-white pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg mx-auto px-6"
      >
        <div className="w-20 h-20 rounded-3xl bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-8">
          <Wrench size={40} />
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
          <Clock size={12} /> Coming Soon
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Device <span className="text-blue-500">Fixing Center</span></h1>
        <p className="text-white/60 mb-8 leading-relaxed">
          Our repair center is gearing up. Certified technicians, genuine parts, and warranties — everything you need to get your devices back in action.
        </p>
        <Link
          to="/ventures/leikantse-tech"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all"
        >
          Back to Leikantse Tech <ArrowRight size={18} />
        </Link>
      </motion.div>
    </div>
  );
};

export default LeikantseFixing;
