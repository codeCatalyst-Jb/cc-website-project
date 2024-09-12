import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./Sections/HeroSection/HeroSection";
import About from "./Sections/About";
import Contact from "./Sections/ContactSection/Contact";
import TeamAboutSection from "./Sections/TeamAboutSection/TeamAboutSection";

function App() {
  return (
    <Router>
      <div id="app">
        <Navbar />
        <Routes>
          {/* Home Route: Renders the front page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <About />
              </>
            }
          />
          {/* Contact Route: Renders only the Contact section */}
          <Route path="/contact" element={<Contact />} />
          {/* About Route: Renders only the About section */}
          <Route path="/about" element={<TeamAboutSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
