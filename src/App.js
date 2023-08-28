import { Route, Routes } from "react-router-dom";
import './App.css';
import { Navbar } from "./component/Navbar";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Services from "./component/pages/products";
import Contact from "./component/pages/Contact";
import Footer from "./component/pages/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
