import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import AllProducts from "./Pages/AllProducts";
import ProductDisplay from "./Pages/ProductDisplay";
import About from "./Pages/About";


// https://fakestoreapi.com/products


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/product:id" element={<ProductDisplay />} />  
        <Route path="/about" element={<About />} />  

      </Routes>
    </BrowserRouter>
  );
}

export default App;
