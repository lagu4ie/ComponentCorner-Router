import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/CartItem";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

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

  const cartTotal = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div id="home">
      <Header
        storeName="ComponentCorner"
        cartCount={cart.length}
      />

      <Hero
        title="Welcome to ComponentCorner"
        subtitle="Find quality electronics at affordable prices."
        buttonText="Shop Now"
      />

      <main id="products">
        <h2>Featured Products</h2>

        <div className="products">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>

        <section className="shopping-cart" id="cart">
          <h2>Shopping Cart ({cart.length})</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <CartItem
                    key={item.cartId}
                    item={item}
                    onRemove={() => removeFromCart(item.cartId)}
                  />
                ))}
              </div>

              <h3 className="cart-total">
                Total: ${cartTotal.toFixed(2)}
              </h3>
            </>
          )}
        </section>
      </main>

      <Footer
        storeName="ComponentCorner"
        email="contact@componentcorner.com"
      />
    </div>
  );
}

export default App;