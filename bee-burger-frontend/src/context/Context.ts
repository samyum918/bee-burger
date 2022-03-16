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
  addCartItem: () => undefined,
  updateCartItem: () => undefined,
  deleteCartItem: () => undefined,
  emptyCartItem: () => undefined,
});

const SubmittedOrderContext = React.createContext<SubmittedOrderIf>({
  submittedOrder: [],
  submitCart: () => undefined,
});

export { CartContext, SubmittedOrderContext };
