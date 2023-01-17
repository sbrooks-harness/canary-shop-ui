import React from "react";
import { createContext, useState } from "react";
import { Props } from "react-responsive-carousel/lib/ts/components/Thumbs";
import { CartListContext, Product } from "../type";

const initContextValue: CartListContext = {
  cartItems: [],
  addCartItem: (newItem: Product) => undefined,
  removeCartItem: (productId: number) => undefined,
};

const CartList = createContext<CartListContext>(initContextValue);

export const CartListContextProvider = (props: Props) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  React.useEffect(() => {
    console.log("cartItems", cartItems);
  }, [cartItems]);

  const addCartItemHandler = (newItem: Product) => {
    const items = [...cartItems];
    items.push(newItem);
    setCartItems(items);
  };

  const removeCartItemHandler = (productId: number) => {
    const newList = [...cartItems].filter((item) => item.id !== productId);
    setCartItems(newList);
  };

  const context = {
    cartItems,
    addCartItem: addCartItemHandler,
    removeCartItem: removeCartItemHandler,
  };

  return (
    <CartList.Provider value={context}>{props.children}</CartList.Provider>
  );
};

export const AppContext = createContext({} as CartListContext);
export default CartList;
