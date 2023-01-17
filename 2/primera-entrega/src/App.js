import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./css/Style.css"
import Footer from "./components/Footer";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Error404 from "./components/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Gracias from "./components/Gracias";

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/checkout"} element={<Checkout />} />
        <Route path={"/gracias-rey/:id"} element={<Gracias />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
