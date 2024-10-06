import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Shop from "./components/Shop";
import CartPage from "./components/CartPage";
// import { useState } from "react";

function App() {
  // const [cart, setCart] = useState([]);
  return (
    <>
      {/* <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Shop cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes> */}

      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
