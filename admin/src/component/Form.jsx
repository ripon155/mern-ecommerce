import { useState } from "react";
import Input from "./Input";

function Form() {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="mt-10 mx-4 ">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <Input
            name="phone"
            type="text"
            placeholder="Enter name"
            label=" Name"
            classname="w-1/3"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <Input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleChange}
            label=" Name"
            classname="w-1/3"
          />
        </div>
        <div className="mb-3">
          <Input
            name="phone"
            type="text"
            placeholder="Enter phone number"
            label=" Phone Number"
            classname="w-1/3"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <Input
            name="price"
            type="text"
            placeholder="Enter product price"
            label=" Product Price"
            classname="w-1/3"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <Input
            name="file"
            type="file"
            label=" Product Image"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="submit"
            value="Submit"
            className=" bg-slate-900 cursor-pointer mx-3 px-3 py-1 text-white rounded"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
