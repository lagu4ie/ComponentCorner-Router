import "./ProductCard.css";

function ProductCard({ name, price, image, description, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <h2>{name}</h2>

      <p>{description}</p>

      <h3>${price.toFixed(2)}</h3>

      <button onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;