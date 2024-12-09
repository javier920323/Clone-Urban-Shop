import { createContext, useState } from "react";

export const ShopingCardContext = createContext();

export function ShopingCardProvider({ children }) {
  //Shopping cart - Increment quantity
  const [cart, setCart] = useState(0);

  //Product detail: Open/close
  const [isProductOpen, setIsProductOpen] = useState(false);
  const openProductDetalle = () => setIsProductOpen(true);
  const closeProductDetalle = () => setIsProductOpen(false);

  //Product detail: show product details
  const [productShowDetalle, setProductShowDetalle] = useState({});

  //Add carrito
  const [addToCart, setAddToCart] = useState([]);

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
