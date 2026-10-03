import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import "./App.css";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://placehold.co/600x400",
      description:
        "Premium noise-cancelling headphones with 30-hour battery life"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 249.99,
      image: "https://placehold.co/600x400",
      description: "Fitness tracker with heart rate monitor and GPS"
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 79.99,
      image: "https://placehold.co/600x400",
      description: "Portable waterproof speaker with 360-degree sound"
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 49.99,
      image: "https://placehold.co/600x400",
      description: "Ergonomic aluminum stand for laptops and tablets"
    },
    {
      id: 5,
      name: "Webcam",
      price: 129.99,
      image: "https://placehold.co/600x400",
      description: "4K webcam with auto-focus and noise reduction"
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      price: 159.99,
      image: "https://placehold.co/600x400",
      description: "RGB backlit keyboard with custom switches"
    }
  ];

  const addToCart = (product) => {
    setCart((previousCart) => [
      ...previousCart,
      {
        ...product,
        cartId: crypto.randomUUID()
      }
    ]);
  };

  const removeFromCart = (cartId) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.cartId !== cartId)
    );
  };

  return (
    <BrowserRouter>
      <div id="home">
        <Header
          storeName="ComponentCorner"
          cartCount={cart.length}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/products"
            element={
              <ProductsPage
                products={products}
                addToCart={addToCart}
              />
            }
          />

          <Route
            path="/products/:id"
            element={
              <ProductDetailsPage
                products={products}
                addToCart={addToCart}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <CartPage
                products={cart}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>

        <Footer
          storeName="ComponentCorner"
          email="contact@componentcorner.com"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;