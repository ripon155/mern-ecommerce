import PropTypes from "prop-types";
import ProductShow from "./ProductShow";

function ProductList({ products, updateProductById, deleteProductsById }) {
  const renderProduct = products.map((product, index) => {
    return (
      <ProductShow
        key={index}
        product={product}
        updateProductById={updateProductById}
        deleteProductsById={deleteProductsById}
      />
    );
  });

  return (
    <>
      <div className="mx-12  p-4 border">
        <div className="flex items-center justify-between ">
          <div className="">Name</div>
          <div className="">Price</div>
          <div className="">Image</div>
          <div className="  text-xs font-medium text-gray-500 uppercase tracking-wider">
            Action
          </div>
        </div>
      </div>
      <div className="mx-12">{renderProduct}</div>
    </>
  );
}

ProductList.propTypes = {
  products: PropTypes.array,
  updateProductById: PropTypes.func,
  deleteProductsById: PropTypes.func,
};

export default ProductList;
