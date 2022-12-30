import { createContext, useState } from "react";

const CartList = createContext({
  cartItems: [] as any[],
  addCartItem: (newItem: any) => {},
  removeCartItem: (itemToRemove: string) => {},
});

export const CartListContextProvider = (props: any) => {
  const [currentCartItems, setCurrentCartItems] = useState<any[]>([]);

  const addCartItemHandler = (newItem: any) => {
    setCurrentCartItems((prevCartItems: any) => {
      return prevCartItems ? [...prevCartItems, newItem] : [newItem];
    });
  };

  const removeCartItemHandler = (itemToRemove: any) => {
    let newCart = currentCartItems.filter((itemId) => {
      return itemId !== itemToRemove;
    });
    setCurrentCartItems(newCart);
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
