import { useState } from "react";

import { useLoginMutation } from "../../store/apis/usersApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [login, { isSuccess }] = useLoginMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = await login({ email, password });
    dispatch(setCredentials(data));
    if (isSuccess) {
      navigate("/");
    }
  };

  return (
    <div>
      <div className="h-40  bg-slate-950  flex justify-center items-center">
        <h2 className="text-white text-3xl">Product Details </h2>
      </div>

      <form
        className="w-2/4 mx-auto border my-8 shadow"
        onSubmit={handleSubmit}
      >
        <h1 className="mt-4 p-4 font-bold text-2xl">User Login</h1>

        <div className="mt-4 p-4">
          <input
            className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="email"
            name=""
            id=""
            placeholder="email@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-4 p-4">
          <input
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="password"
            name=""
            id=""
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-4 p-4">
          <button className="bg-slate-700 px-3 py-2 text-white rounded">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
