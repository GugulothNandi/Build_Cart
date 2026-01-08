function Register() {
  return (
    <div className="flex justify-center mt-20">
      <div className="w-80 p-6 shadow-lg">
        <h2 className="text-xl mb-4">Register</h2>
        <input className="border p-2 w-full mb-2" placeholder="Name" />
        <input className="border p-2 w-full mb-2" placeholder="Email" />
        <input
          type="password"
          className="border p-2 w-full mb-2"
          placeholder="Password"
        />
        <button className="bg-green-500 text-white w-full p-2">Register</button>
      </div>
    </div>
  );
}

export default Register;
