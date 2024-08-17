import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {Navbar} from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndustryLayout from "./pages/industryLayout";

function App() {
  return (
      <Router>
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/industries/:industry" element={<IndustryLayout />} />
          </Routes>
        </main>
        <Footer />
      </Router>
  );
}

export default App;
