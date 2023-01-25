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

    const itemToAdd = { ...newItem };
    itemToAdd.isInCart = true;

    const newCartItems = [...cartItems, itemToAdd];
    setCartItems(newCartItems);
    console.log("New Cart: " + newCartItems);
  };

  const removeItem = (productId: Product) => {
    console.log("Item Removed: " + productId);
    const index = cartItems.indexOf(productId);
    if (index > -1) {
      cartItems.splice(index, 1);
    }
    console.log("New List: " + cartItems);
  };

  const cartContext = {
    cartItems,
    addItem,
    removeItem,
  };

  return <CartList.Provider value={cartContext}>{children}</CartList.Provider>;
};

export default CartListContextProvider;
