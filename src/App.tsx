import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {Navbar} from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndustryLayout from "./pages/industryLayout";
import ServicesPage from "./pages/servicesPage";
import ServicesLayout from "./pages/servicesLayout";
import AboutUs from "./pages/aboutUs";

function App() {
  return (
      <Router>
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/industries/:industry" element={<IndustryLayout />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:service" element={<ServicesLayout />} />
          </Routes>
        </main>
        <Footer />
      </Router>
  );
}

export default App;
