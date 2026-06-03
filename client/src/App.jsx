import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LeikantseHome from "./pages/ventures/LeikantseHome";
import LeikantseDevices from "./pages/ventures/LeikantseDevices";
import LeikantseAccessories from "./pages/ventures/LeikantseAccessories";
import LeikantseFixing from "./pages/ventures/LeikantseFixing";
import LeikantseContact from "./pages/ventures/LeikantseContact";

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ventures/leikantse-tech" element={<LeikantseHome />} />
          <Route path="/ventures/leikantse-tech/devices" element={<LeikantseDevices />} />
          <Route path="/ventures/leikantse-tech/accessories" element={<LeikantseAccessories />} />
          <Route path="/ventures/leikantse-tech/device-fixing" element={<LeikantseFixing />} />
          <Route path="/ventures/leikantse-tech/contact" element={<LeikantseContact />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
