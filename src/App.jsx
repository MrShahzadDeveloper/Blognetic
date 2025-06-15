import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
import Terms from "./pages/Terms";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="bg-[#FAFAFA] ">
      <Navbar />
      <div className="scrollbar-thin scrollbar-thumb-[#7C4EE4] scrollbar-track-gray-100 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
      <Footer />
      </div>
    </Router>
  );
};

export default App;
