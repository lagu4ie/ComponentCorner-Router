import { useParams } from "react-router-dom";

function ProductDetailsPage({ products, addToCart }) {
  const { id } = useParams();

  const product = products.find(
    (product) => product.id === parseInt(id)
  );

  if (!product) {
    return (
      <main>
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist.</p>
      </main>
    );
  }

  return (
    <main>
      <h2>{product.name}</h2>

      <img
        src={product.image}
        alt={product.name}
      />

      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </main>
  );
}

export default ProductDetailsPage;