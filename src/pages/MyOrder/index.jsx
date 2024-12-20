import { useContext } from "react";
import { v4 as uuidv4 } from "uuid"; 
import { ShopingCardContext } from "../../context";
import { NavLink } from "react-router-dom";

function MyOrder() {
  const context = useContext(ShopingCardContext);

  const decrementarProductCard = (data) => {
    if (data.cantidad > 1) {
      context.setCart((prevCart) => prevCart - 1);
      context.setAddToCart((prevCartItems) => {
        return prevCartItems.map((item) =>
          item.id === data.id ? { ...item, cantidad: item.cantidad - 1 } : item
        );
      });
    }
  };

  const precioTotal = () => {
    return context.addToCart.reduce((total, item) => total + item.price * item.cantidad, 0);
  };

  const generaOrder = () => {
    const fecha = new Date();
    const orderAdd = {
      id: uuidv4(),
      date: fecha.toLocaleDateString("es-ES"),
      produtos: context.addToCart,
      totalProdutos: context.cart,
      totalPecio: precioTotal(),
    };
    context.setOrder([...context.order, orderAdd]);
    context.setAddToCart([]);
    context.setCart(0);
  };

  return (
    <div className=" mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Carrito de Compras</h1>

      {context.addToCart.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {context.addToCart.map((item) => (
            <div key={item.id} className="flex items-center border-b pb-4">
              <img src={item.images[0]} className="w-24 h-24 object-cover rounded-md mr-4" />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-600">${item.price} cada uno</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => decrementarProductCard(item)}
                    className="bg-gray-200 px-3 py-1 rounded-l-md hover:bg-gray-300"
                  >
                    ➖
                  </button>
                  <span className="px-4 py-1 bg-gray-100">{item.cantidad}</span>
                  <button
                    onClick={() => context.addProductCard(item)}
                    className="bg-gray-200 px-3 py-1 rounded-r-md hover:bg-gray-300"
                  >
                    ➕
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-lg font-bold">${item.price * item.cantidad}</p>
                <button
                  onClick={() => context.deleteProductCard(item)}
                  className="text-red-500 hover:text-red-700 mt-2"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {context.addToCart.length > 0 && (
        <div className="mt-6 text-right">
          <h2 className="text-2xl font-bold">Total: ${precioTotal()}</h2>
          <NavLink to="/my-orders">
            <button
              onClick={() => generaOrder()}
              className="bg-blue-600 text-white px-6 py-2 rounded-md mt-4 hover:bg-blue-700 transition-colors"
            >
              Finalizar Compra
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default MyOrder;
