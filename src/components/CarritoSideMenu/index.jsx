import { useContext } from "react";
import { ShopingCardContext } from "../../context";
import "./carritoAsideMenu.css";

function CarritoAsideMenu() {
  const context = useContext(ShopingCardContext);

  return (
    <aside
      className={`${
        context.isProductOpen ? "flex" : "hidden"
      } productDetalle flex flex-col gap-2 fixed bg-white right-0 top-[65px] border border-black rounded p-4`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">🛒 Carrito de Compras</h2>
        <button
          onClick={() => context.closeProductDetalle()}
          className="text-xl cursor-pointer hover:text-red-500 transition-colors"
          aria-label="Cerrar"
        >
          🗙
        </button>
      </div>

      {context.addToCart.length === 0 ? (
        <p className="text-gray-500">El carrito está vacío.</p>
      ) : (
        <ul className="space-y-4">
          {context.addToCart.map((item) => (
            <li key={item.id} className="flex items-center justify-between border-b pb-2">
              <div>
                <h3 className="text-md font-medium">{item.name}</h3>

                <p className="text-sm font-semibold">${item.price}</p>
              </div>
              <button
                onClick={() => console.log("sadsd")}
                className="text-red-500 hover:text-red-700"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}

      {context.addToCart.length > 0 && (
        <div className="mt-6 border-t pt-4">
          <p className="text-lg font-bold">
            Total: $
            {/* {context.addToCart
              .reduce((total, item) => total + item.price * item.quantity, 0)} */}
          </p>
          <button className="w-full bg-blue-600 text-white py-2 mt-4 rounded-md hover:bg-blue-700 transition-colors">
            Finalizar Compra
          </button>
        </div>
      )}
    </aside>
  );
}

export default CarritoAsideMenu;
