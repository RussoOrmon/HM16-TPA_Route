import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import MyCart from "./pages/MyCart";
import MyOrders from "./pages/MyOrders";
import Product from "./pages/Product";
import Products from "./pages/Products";

const products = [
  {
    title: "Product Details page",
    name: "Product Name  ",
    id: 1,
  },
  {
    title: "Product Details page",
    name: "Product Name  ",
    id: 2,
  },
];
function App() {
  const [isLogged, setLogged] = useState(false);

  const toggleHandler = () => {
    setLogged((prev) => !prev);
  };

  return (
    <div className="App">
    
      <h1>#hELlo@</h1>
      <Header isLogged={isLogged} />
      <Routes>
        <Route path="/" element={<LoginPage toggleHandler={toggleHandler} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/myCart" element={<MyCart />} />
        <Route path="/myOrders" element={<MyOrders />} />
        {products.map((item) => (
          <Route
            path="/products/:id/details"
            element={
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                name={item.name}
              />
            }
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
