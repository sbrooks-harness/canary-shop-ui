import { createContext, useState } from "react";
import { CartListContext, Product } from "../type";

export const CartList = createContext<CartListContext>({} as CartListContext);

interface CartContextProps {
  children?: React.ReactNode;
}

const CartListContextProvider: React.FC<CartContextProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addItem = (newItem: Product) => {
    console.log("Item Added: " + newItem);
    const items = [...cartItems];
    items.push(newItem);
    setCartItems(items);
  };

  const removeItem = (productId: number) => {
    console.log("Item Removed: " + productId);
  };

  const cartContext = {
    cartItems,
    addCartItem: addItem,
    removeCartItem: removeItem,
  };

  return <CartList.Provider value={cartContext}>{children}</CartList.Provider>;
};

export default CartListContextProvider;
