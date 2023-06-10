// import Form from "../component/Form";
import { useState } from "react";
import ProductList from "../component/ProductList";

function Products() {
  const productsALl = [
    { id: 1, name: "Mobile", price: 120, img: "No Image" },
    { id: 2, name: "Laptop", price: 1120, img: "No Image" },
    { id: 3, name: "Watch", price: 10, img: "No Image" },
  ];

  const [products, setProducts] = useState(productsALl);

  const deleteProductsById = (id) => {
    const updateProduct = products.filter((product) => product.id !== id);
    setProducts(updateProduct);
  };

  const updateProductById = (pro) => {
    const updateProduct = products.map((product) => {
      if (pro.id === product.id) {
        return pro;
      }
      return product;
    });

    setProducts(updateProduct);
  };

  return (
    <div className="w-5/6 ">
      <ProductList
        products={products}
        updateProductById={updateProductById}
        deleteProductsById={deleteProductsById}
      />
    </div>
  );
}

export default Products;
