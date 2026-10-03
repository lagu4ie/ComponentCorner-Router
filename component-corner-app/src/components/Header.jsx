import "./Header.css";

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <h1>{storeName}</h1>

      <nav>
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
      </nav>

      <div className="cart-container">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
}

export default Header;