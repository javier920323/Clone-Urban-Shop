import { createContext, useEffect, useState } from "react";

export const ShopingCardContext = createContext();

export function ShopingCardProvider({ children }) {
  //Productos llamando a la api
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=&limit=20")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((err) => {
        err.message;
      });
  }, []);

  //Shopping cart - Increment quantity
  const [cart, setCart] = useState(0);

  //Product detail
  const [productShowDetalle, setProductShowDetalle] = useState({});

  //Add Carrito e Incrementar cantidad de producto en el carro
  const [addToCart, setAddToCart] = useState([]);
  const addProductCard = (productData) => {
    setCart((prevCart) => prevCart + 1);

    setAddToCart((prevCartItems) => {
      const exists = prevCartItems.find((item) => item.id === productData.id);
      if (exists) {
        return prevCartItems.map((item) =>
          item.id === productData.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prevCartItems, { ...productData, cantidad: 1 }];
    });
  };

  //Eliminar Carrito
  const deleteProductCard = (data) => {
    setCart((prevCart) => prevCart - data.cantidad);
    setAddToCart((prevCart) => prevCart.filter((item) => item.id !== data.id));
  };

  //Carrito Aside Menu: Open/close
  const [isProductOpen, setIsProductOpen] = useState(false);
  const openProductDetalle = () => setIsProductOpen(true);
  const closeProductDetalle = () => setIsProductOpen(false);

  return (
    <ShopingCardContext.Provider
      value={{
        productos,
        setProductos,
        cart,
        setCart,
        isProductOpen,
        openProductDetalle,
        closeProductDetalle,
        productShowDetalle,
        setProductShowDetalle,
        addToCart,
        setAddToCart,
        addProductCard,
        deleteProductCard,
      }}
    >
      {children}
    </ShopingCardContext.Provider>
  );
}
