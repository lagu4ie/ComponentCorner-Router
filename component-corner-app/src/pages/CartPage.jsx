import CartItem from "../components/CartItem";

function CartPage({ products, removeFromCart }) {
  const cartTotal = products.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <main>
      <section className="shopping-cart" id="cart">
        <h2>Shopping Cart ({products.length})</h2>

        {products.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {products.map((item) => (
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
  );
}

export default CartPage;