import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <Navbar />
      <main>{children || <Outlet />}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
