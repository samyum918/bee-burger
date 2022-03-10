import React from "react";
import { CartItemIf } from "../common/types";

interface CartContextIf {
  cart: CartItemIf[];
  addCartItem(item: CartItemIf): void;
  updateCartItem(index: number, item: CartItemIf): void;
  deleteCartItem(index: number): void;
  emptyCartItem(): void;
}

interface SubmittedOrderIf {
  submittedOrder: CartItemIf[];
  submitCart(): void;
}

const CartContext = React.createContext<CartContextIf>({
  cart: [],
  addCartItem: (item: CartItemIf) => {},
  updateCartItem: (index: number, item: CartItemIf) => {},
  deleteCartItem: (index: number) => {},
  emptyCartItem: () => {},
});

const SubmittedOrderContext = React.createContext<SubmittedOrderIf>({
  submittedOrder: [],
  submitCart: () => {},
});

export { CartContext, SubmittedOrderContext };
