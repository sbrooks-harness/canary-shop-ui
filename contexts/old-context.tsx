// import React from "react";
// import { createContext, useState } from "react";
// import { CartListContext, Product } from "../type";

// const initCartValue: CartListContext = {
//   cartItems: [],
//   addCartItem: (newItem: Product) => undefined,
//   removeCartItem: (productId: number) => undefined,
// };

// export const CartList = createContext<CartListContext>({} as CartListContext);

// const CartListContextProvider: React.FC = (props) => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   const addCartItemHandler = (newItem: Product) => {
//     const items = [...cartItems];
//     items.push(newItem);
//     setCartItems(items);
//   };

//   const removeCartItemHandler = (productId: number) => {
//     const newList = [...cartItems].filter((item) => item.id !== productId);
//     setCartItems(newList);
//   };

//   const cartContext = {
//     cartItems,
//     addCartItem: addCartItemHandler,
//     removeCartItem: removeCartItemHandler,
//   };

//   return (
//     <CartList.Provider value={cartContext}>{props.children}</CartList.Provider>
//   );
// };

// export default CartListContextProvider;
