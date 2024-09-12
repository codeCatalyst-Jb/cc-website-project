import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./Sections/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import About from "./Sections/About";
import Events from "./Sections/Events";
import Team from "./Sections/Team";
import Contact from "./Sections/ContactSection/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div id="app">
      <Navbar />
      <HeroSection />
      <About />
      <Contact />
      {/* <Events />
      <Team />
      <Footer /> */}
    </div>
  );
}

export default App;
