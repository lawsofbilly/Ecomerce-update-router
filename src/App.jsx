import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Product from "./pages/Product";
// import Register from "./pages/Register";
// import ProductList from "./pages/ProductList";
// import Login from "./pages/Login";
// import Cart from "./pages/Cart";
// // import { BrowserRouter, Route, Routes } from "react-router-dom";

// const App = () => {
//   return <Home />;
// };

// export default App;
