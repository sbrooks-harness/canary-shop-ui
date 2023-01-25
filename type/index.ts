export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  imgSrc: string;
  isInCart: boolean;
}

export interface CartListContext {
  cartItems: Product[];
  addItem: (newItem: Product) => void;
  removeItem: (productId: Product) => void;
}
