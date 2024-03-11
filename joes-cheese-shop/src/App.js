import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Basket from "./pages/Basket";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/products" />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
