export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  imgSrc: string;
}

export interface CartListContext {
  cartItems: Product[];
  addCartItem: (newItem: Product) => void;
  removeCartItem: (productId: number) => void;
}
