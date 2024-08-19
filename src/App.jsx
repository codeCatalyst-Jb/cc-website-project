import "./App.css";
import { useRef } from "react";
import HeroSection from "./Sections/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import About from "./Sections/About";
import Events from "./Sections/Events";
import Team from "./Sections/Team";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/contact";

function App() {
  const contactRef = useRef(null);
  return (
    <div id="app">
      <Navbar contactRef={contactRef} />
      <HeroSection />
      <About />
      <Events />
      <Team />
      <Contact contactRef={contactRef}/>
      <Footer />
    </div>
  );
}

export default App;
