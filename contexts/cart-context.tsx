import { createContext, useState } from "react";

const CartList = createContext({
  cartItems: [],
  addCartItem: (newItem: any) => {},
  removeCartItem: (itemToRemove: any) => {},
});

export const CartListContextProvider = (props: any) => {
  const [currentCartItems, setCurrentCartItems] = useState<any>([]);

  const addCartItemHandler = (newItem: string) => {
    setCurrentCartItems((prevCartItems: any) => {
      return prevCartItems ? [...prevCartItems, newItem] : [newItem];
    });
  };

  const removeCartItemHandler = (itemToRemove: any) => {
    setCurrentCartItems((prevCartItems: string[]) => {
      const index = prevCartItems.indexOf(itemToRemove);
      if (index > -1) {
        prevCartItems.splice(index, 1);
      }
    });
  };

  const context = {
    cartItems: currentCartItems,
    addCartItem: addCartItemHandler,
    removeCartItem: removeCartItemHandler,
  };

  return (
    <CartList.Provider value={context}>{props.children}</CartList.Provider>
  );
};

export default CartList;
