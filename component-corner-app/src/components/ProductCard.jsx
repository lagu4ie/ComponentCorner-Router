import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ id, name, price, image, description, onAddToCart }) {
  return (
    <div className="product-card">
      <Link
        to={`/products/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
      </Link>

      <h3>${price.toFixed(2)}</h3>

      <button onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;