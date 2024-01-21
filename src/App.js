import Benefit from "./components/Benefit";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Overview from "./components/Overview";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Overview />
      <Benefit />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
