import "./App.css";
import HeroSection from "./Sections/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import About from "./Sections/About";
import Events from "./Sections/Events";
import Team from "./Sections/Team";
import Contact from "./Sections/Contact";
import Footer from "./components/Footer/Footer";
import Aboutpage from "./subpages/about_subpages/Aboutpage.jsx"

function App() {
  return (
    <div id="app">
      <Navbar />
      <HeroSection />
      <About />
      {/* <Events />
      <Team />
      <Contact />
      <Footer /> */}
      <Aboutpage/>
    </div>
  );
}

export default App;
