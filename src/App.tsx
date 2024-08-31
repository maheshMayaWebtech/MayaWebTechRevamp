import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {Navbar} from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndustryLayout from "./pages/IndustryLayout";
import ServicesPage from "./pages/ServicesPage";
import ServicesLayout from "./pages/ServicesLayout";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/Contact";
import { Toaster } from "./components/ui/toaster";
import ScrollToTop from "./hooks/scrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndCondition";
import Disclaimer from "./pages/Disclaimer";

function App() {
  return (
      <Router>
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/tnc" element={<TermsAndConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/industries/:industry" element={<IndustryLayout />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:service" element={<ServicesLayout />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
        <ScrollToTop />
      </Router>
  );
}

export default App;
