import { useState } from "react";

function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) return <p className="p-6">Your cart is empty.</p>;

  return (
    <div className="p-6  bg-sky-200">
      <h2 className="text-xl mb-4">Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-2 flex justify-between items-center"
        >
          <div>
            <p>{item.name}</p>
            <p>Price: ₹{item.price}</p>
            <div className="flex items-center mt-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="bg-gray-300 px-2"
              >
                -
              </button>
              <span className="px-2">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-gray-300 px-2"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h3 className="text-lg mt-4">Total: ₹{totalPrice}</h3>
    </div>
  );
}

export default Cart;
