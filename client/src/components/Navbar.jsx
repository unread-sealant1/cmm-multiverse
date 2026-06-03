import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const prevPath = useRef(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (prevPath.current !== pathname) {
      prevPath.current = pathname;
      setOpen(false);
    }
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark/90 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold tracking-tighter bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent"
        >
          CMM MULTIVERSE
        </Link>

        <div className="hidden md:flex gap-1 items-center font-medium text-sm uppercase tracking-widest">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg transition-all ${
                pathname === link.to
                  ? "text-white bg-white/10"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/ventures/leikantse-tech"
            className="ml-2 bg-brand-primary px-4 py-2 rounded-full hover:bg-brand-secondary transition-all text-white font-bold"
          >
            Leikantse Tech
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-xl border-t border-white/10 px-6 py-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-4 py-3 rounded-xl text-sm font-medium uppercase tracking-widest transition-all ${
                pathname === link.to
                  ? "text-white bg-white/10"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/ventures/leikantse-tech"
            className="block px-4 py-3 rounded-xl bg-brand-primary text-white text-sm font-bold uppercase tracking-widest text-center"
          >
            Leikantse Tech
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
