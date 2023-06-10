import PropTypes from "prop-types";
import { useState } from "react";

function ProductEdit({ product, handleEdit }) {
  const [productV, setProductV] = useState(product);

  const handleChange = (e) => {
    setProductV({ ...productV, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    handleEdit(productV);
  };

  return (
    <div className="flex items-center justify-evenly">
      <input
        className="border-2 border-slate-500 my-2 rounded whitespace-nowrap"
        name="name"
        value={productV.name}
        onChange={handleChange}
      />
      <input
        className="border-2 border-slate-500 my-2 rounded whitespace-nowrap"
        name="price"
        value={productV.price}
        onChange={handleChange}
      />
      <input
        className="border-2 border-slate-500 my-2 rounded whitespace-nowrap w-28"
        type="file"
      />

      <button className=" bg-green-500" onClick={onSubmit}>
        Save
      </button>
    </div>
  );
}

ProductEdit.propTypes = {
  product: PropTypes.object,
  handleEdit: PropTypes.func,
};

export default ProductEdit;
