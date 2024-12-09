import { useContext } from "react";
import { ShopingCardContext } from "../../context";

function Card(data) {
  const context = useContext(ShopingCardContext);
  const showProduct = (productDetail) => {
    context.openProductDetalle();
    context.setProductShowDetalle(productDetail);
  };

  const addProductCard = (productData, e) => {
    e.stopPropagation();

    context.setCart(context.cart + 1);
    context.setAddToCart([...context.addToCart, productData]);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      onClick={() => showProduct(data.data)}
    >
      <img src={data.data.images[0]} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{data.data.title}</h3>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900">${data.data.price}</span>
          <button
            onClick={(e) => addProductCard(data.data, e)}
            type="button"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Lo Quiero
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
