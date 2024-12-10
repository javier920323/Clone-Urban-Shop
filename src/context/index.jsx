import { createContext, useState } from "react";

export const ShopingCardContext = createContext();

export function ShopingCardProvider({ children }) {
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
