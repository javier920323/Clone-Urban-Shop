import { useContext } from "react";
import { ShopingCardContext } from "../../context";

function MyOrders() {
  const context = useContext(ShopingCardContext);
  console.log(context.order);
  
  return (
    <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {context.order.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {context.order.map((order) => (
            <div key={order.id} className="border p-4 rounded-lg shadow-md bg-white">
              <h2 className="font-bold text-lg">Order ID: {order.id}</h2>
              <p className="text-gray-700">Date: {order.date}</p>
              <p className="text-gray-700">Total: ${order.totalPecio.toFixed(2)}</p>

              <ul className="mt-4">
                {order.produtos.map((item) => (
                  <li key={item.id} className="flex justify-between">
                    <span>
                      {item.name} (x{item.quantity})
                    </span>
                    <span>${item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyOrders;
