import { Link } from "react-router-dom";
import { Globe, BookMarked, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link
            to="/"
            className="text-xl font-bold tracking-tighter bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent"
          >
            CMM MULTIVERSE
          </Link>
          <p className="mt-4 text-white/40 text-sm max-w-md leading-relaxed">
            Building scalable digital ecosystems and incubating high-impact technology ventures. 
            We architect the future of digital experiences.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Navigate</h4>
          <div className="space-y-3">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/projects", label: "Projects" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="block text-sm text-white/50 hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Ventures</h4>
          <div className="space-y-3">
            <Link to="/ventures/leikantse-tech" className="block text-sm text-white/50 hover:text-white transition-colors">
              Leikantse Tech
            </Link>
            <Link to="/ventures/leikantse-tech/devices" className="block text-sm text-white/50 hover:text-white transition-colors">
              Devices
            </Link>
            <Link to="/ventures/leikantse-tech/device-fixing" className="block text-sm text-white/50 hover:text-white transition-colors">
              Repairs
            </Link>
            <Link to="/ventures/leikantse-tech/accessories" className="block text-sm text-white/50 hover:text-white transition-colors">
              Accessories
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} CMM Multiverse. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[
              { icon: <Globe size={16} />, href: "#", label: "Website" },
              { icon: <BookMarked size={16} />, href: "#", label: "Blog" },
              { icon: <MessageCircle size={16} />, href: "#", label: "Community" },
              { icon: <Mail size={16} />, href: "mailto:cmmmultiverse@gmail.com", label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-brand-primary/20 hover:text-brand-primary transition-all"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
