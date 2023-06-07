import ProductListItem from "../productlistitem/ProductListItem";
import { useFetchProductsQuery } from "../../store";
import Skeleton from "./../skeleton/Skeleton";
function ProductList() {
  const { data, error, isLoading } = useFetchProductsQuery();

  let renderProductListItem;
  if (isLoading) {
    renderProductListItem = <Skeleton times={3} />;
  } else if (error) {
    renderProductListItem = <div>Error loading album</div>;
  } else {
    renderProductListItem = data.data.map((item, index) => {
      return <ProductListItem key={index} item={item} />;
    });
  }

  return (
    <div className="container mt-4  ml-10">
      <div className="flex flex-wrap">
        <div className="w-1/6 ">
          <h4 className="border-b-4 p-4">Product categories</h4>
          <div className="p-2 cursor-pointer font-medium hover:bg-sky-700 hover:text-white">
            Electronic
          </div>
          <div className="p-2 cursor-pointer font-medium hover:bg-sky-700 hover:text-white">
            Fashion & Beauty
          </div>
          <div className="p-2 cursor-pointer font-medium hover:bg-sky-700 hover:text-white">
            Camera & Photo
          </div>
          <div className="p-2 cursor-pointer font-medium hover:bg-sky-700 hover:text-white">
            Smart Phone & Table
          </div>
          <div className="p-2 cursor-pointer font-medium hover:bg-sky-700 hover:text-white">
            Sport & Outdoor
          </div>
          <div className="p-2 cursor-pointer font-medium hover:bg-sky-700 hover:text-white">
            Jewelry & Watches
          </div>
          <div className="p-2 cursor-pointer font-medium hover:bg-sky-700 hover:text-white">
            Health & Beauty
          </div>
          <div className="p-2 cursor-pointer font-medium hover:bg-sky-700 hover:text-white">
            Books & Office
          </div>
        </div>
        <div className="w-5/6 pl-4 ">
          <h1 className="p-2">Product List</h1>
          <div className="flex flex-wrap">{renderProductListItem}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
