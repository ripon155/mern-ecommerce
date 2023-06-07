import { useState } from "react";
import { useRegisterMutation } from "../../store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../store/slices/authSlice";

function Registration() {
  const [register, { data, isSuccess, error }] = useRegisterMutation();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (isSuccess) {
    dispatch(setCredentials(data));
    navigate("/");
  } else if (error) {
    window.alert(error);
  }

  // useEffect(() => {
  //   if (isSuccess) {
  //     navigate("/");
  //   }
  // }, [isSuccess]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await register({ name, email, password, confirmpassword });
  };
  return (
    <div>
      <div className="h-40  bg-slate-950  flex justify-center items-center">
        <h2 className="text-white text-3xl">User Registration </h2>
      </div>

      <form className="w-2/4 mx-auto border my-8" onSubmit={handleSubmit}>
        <h1 className="mt-4 p-4 font-bold text-2xl">User Registration</h1>
        <div className="mt-4 p-4">
          <input
            className="border  rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="text"
            name="name"
            id=""
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-4 p-4">
          <input
            className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="email"
            name="email"
            id=""
            placeholder="email@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-4 p-4">
          <input
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="password"
            name="password"
            id=""
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-4 p-4">
          <input
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="password"
            name="confirmpassword"
            id=""
            placeholder="confirmpassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="mt-4 p-4">
          <button className="bg-slate-700 px-3 py-2 text-white rounded">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
