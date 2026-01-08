import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between p-4 bg-black text-white">
      <h1 className="text-xl font-bold">BuildCart</h1>
      <div className="space-x-4 ">
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
