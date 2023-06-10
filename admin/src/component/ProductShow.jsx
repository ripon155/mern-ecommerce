import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import PropTypes from "prop-types";
import ProductEdit from "./ProductEdit";
import { useState } from "react";

function ProductShow({ product, updateProductById, deleteProductsById }) {
  const [editProduct, setEditProduct] = useState(false);

  const handleEdit = (upProduct) => {
    console.log(upProduct);
    setEditProduct(false);
    updateProductById(upProduct);
  };

  const handleDelete = () => {
    deleteProductsById(product.id);
  };

  let content = (
    <div className="flex items-center justify-between border p-4">
      <div className="whitespace-nowrap">{product.name}</div>
      <div className="whitespace-nowrap">{product.price}</div>
      <div className="whitespace-nowrap">{product.img}</div>
      <div className="whitespace-nowrap">
        <button
          className=" text-2xl text-green-800 mr-2"
          onClick={() => setEditProduct(!editProduct)}
        >
          <AiOutlineEdit />
        </button>
        <button className="text-2xl text-red-600" onClick={handleDelete}>
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );

  if (editProduct) {
    content = <ProductEdit product={product} handleEdit={handleEdit} />;
  }

  return <>{content}</>;
}

ProductShow.propTypes = {
  product: PropTypes.object,
  updateProductById: PropTypes.func,
  deleteProductsById: PropTypes.func,
};

export default ProductShow;
