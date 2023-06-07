function Registration() {
  return (
    <div>
      <div className="h-40  bg-slate-950  flex justify-center items-center">
        <h2 className="text-white text-3xl">Product Details </h2>
      </div>

      <form className="w-2/4 mx-auto border my-8">
        <h1 className="mt-4 p-4 font-bold text-2xl">User Registration</h1>
        <div className="mt-4 p-4">
          <input
            className="border  rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="text"
            name=""
            id=""
            placeholder="Name"
          />
        </div>
        <div className="mt-4 p-4">
          <input
            className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="email"
            name=""
            id=""
            placeholder="email@email.com"
          />
        </div>
        <div className="mt-4 p-4">
          <input
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="number"
            name=""
            id=""
            placeholder="Phone Number"
          />
        </div>
        <div className="mt-4 p-4">
          <input
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="password"
            name=""
            id=""
            placeholder="Password"
          />
        </div>
        <div className="mt-4 p-4">
          <input
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="text"
            name=""
            id=""
            placeholder="Address"
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
