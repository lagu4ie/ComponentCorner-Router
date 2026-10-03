function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <div>
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
      </div>

      <button onClick={onRemove}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;