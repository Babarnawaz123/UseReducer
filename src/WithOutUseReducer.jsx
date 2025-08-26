import React, { useState } from "react";

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const applyDiscount = (percent) => {
    setDiscount(percent);
  };

  // ✅ Always calculate total dynamically from cart
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const finalTotal = total - (total * discount) / 100;

  return (
    <div>
      <h2>🛒 Shopping Cart</h2>

      <button
        onClick={() => addItem({ id: Date.now(), name: "Laptop", price: 1000 })}
      >
        Add Laptop
      </button>
      <button
        onClick={() => addItem({ id: Date.now(), name: "Phone", price: 500 })}
      >
        Add Phone
      </button>
      <button onClick={() => applyDiscount(10)}>Apply 10% Discount</button>

      <h3>Items:</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>

      <h3>
        Total: ${finalTotal}{" "}
        {discount > 0 && `(Discount Applied: ${discount}%)`}
      </h3>
    </div>
  );
}

export default ShoppingCart;
