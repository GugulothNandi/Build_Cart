import { useState } from "react";

function Products() {
  const role = localStorage.getItem("role");

  const [products] = useState([
    { id: 1, name: "Phone", price: 20000 },
    { id: 2, name: "Laptop", price: 50000 },
    { id: 3, name: "Headphones", price: 2000 },
    { id: 4, name: "Shirt", price: 1050 },
    { id: 4, name: "Tshirt", price: 700 },
    { id: 4, name: "Remort", price: 150 },
    { id: 4, name: "chair", price: 1000 },
  ]);

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    let updatedCart;
    if (existing) {
      updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} added to cart`);
  };

  const deleteProduct = (id) => {
    const confirmed = window.confirm("Are you sure to delete?");
    if (!confirmed) return;
    alert(`Product ID ${id} deleted (UI only)`);
  };

  return (
    <div className="p-10 bg-sky-200">
      <h2 className="text-xl mb-4">Products</h2>

      {products.map((product) => (
        <div
          key={product.id}
          className="border p-4 mb-8 flex justify-between items-center"
        >
          <div>
            <p>{product.name}</p>
            <p>Price: ₹{product.price}</p>
          </div>

          {role === "user" && (
            <button
              onClick={() => addToCart(product)}
              className="bg-green-400 text-white px-3 py-1 rounded"
            >
              Add to Cart
            </button>
          )}

          {role === "admin" && (
            <button
              onClick={() => deleteProduct(product.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete Product
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Products;
