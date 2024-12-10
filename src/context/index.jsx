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

  //Add Carrito
  const [addToCart, setAddToCart] = useState([]);

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
      }}
    >
      {children}
    </ShopingCardContext.Provider>
  );
}
