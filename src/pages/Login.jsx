import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const role = email.includes("admin") ? "admin" : "user";
    localStorage.setItem("role", role);

    navigate("/products");
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="w-80 p-6 shadow-lg">
        <h2 className="text-xl mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white w-full p-2"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
