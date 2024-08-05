import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div id="app" className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
