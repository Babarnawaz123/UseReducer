import React, { useReducer } from "react";

// Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price,
      };

    case "REMOVE_ITEM":
      // Find index of the first matching item
      const index = state.cart.findIndex((item) => item.id === action.payload);
      if (index === -1) return state; // If not found, no change

      // Remove only that one item
      const updatedCart = [...state.cart];
      const removedItem = updatedCart.splice(index, 1)[0];

      return {
        ...state,
        cart: updatedCart,
        total: state.total - removedItem.price,
      };

    case "APPLY_DISCOUNT":
      return { ...state, discount: action.payload };

    default:
      return state;
  }
}

// Initial State
const initialState = {
  cart: [],
  total: 0,
  discount: 0,
};

function ShoppingCart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>🛒 Shopping Cart</h2>
      <button
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            payload: { id: 1, name: "Laptop", price: 1000 },
          })
        }
      >
        Add Laptop
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            payload: { id: 2, name: "Phone", price: 500 },
          })
        }
      >
        Add Phone
      </button>
      <button onClick={() => dispatch({ type: "APPLY_DISCOUNT", payload: 10 })}>
        Apply 10% Discount
      </button>

      <h3>Items:</h3>
      <ul>
        {state.cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: item.id })
              }
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <h3>
        Total: ${state.total - (state.total * state.discount) / 100}{" "}
        {state.discount > 0 && `(Discount Applied)`}
      </h3>
    </div>
  );
}

export default ShoppingCart;
