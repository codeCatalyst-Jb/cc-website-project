import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import About from "./Sections/About";
import Events from "./Sections/Events";
import Team from "./Sections/Team";
import Contact from "./Sections/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div id="app">
      <Navbar />
      <HeroSection />
      <About />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
