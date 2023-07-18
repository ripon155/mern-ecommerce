import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className=" w-screen relative">
      <div className=" w-96 h-60 rounded shadow absolute top-40 left-40 bg-green-500 ">
        <form
          onSubmit={handleSubmit}
          className="flex items-center flex-col gap-2"
        >
          <h3 className=" p-4 text-center text-white text-xl">Login page</h3>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border-2 border-slate-600 px-3 py-2 rounded-md"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              className="border-2 border-slate-600 px-3 py-2 rounded-md"
              onChange={handleChange}
            />
          </div>
          <button className=" transition ease-in-out  bg-white px-4 py-2 rounded hover:bg-black hover:text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
