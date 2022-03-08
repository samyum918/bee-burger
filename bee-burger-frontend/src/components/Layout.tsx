import Landing from "../pages/Landing";
import FoodItems from "../pages/FoodItems";
import ConfirmOrder from "../pages/ConfirmOrder";
import OrderSummary from "../pages/OrderSummary";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { CartContext, SubmittedOrderContext } from "../context/Context";
import { CartItemIf } from "../common/types";

const Layout = () => {
  const [cart, setCart] = useState<CartItemIf[]>([]);
  const [submittedOrder, setSubmittedOrder] = useState<CartItemIf[]>([]);

  function addCartItem(item: CartItemIf) {
    let cartCopy = [...cart];
    cartCopy.push(item);
    setCart(cartCopy);
  }

  function updateCartItem(index: number, item: CartItemIf) {
    let cartCopy = [...cart];
    cartCopy[index] = item;
    setCart(cartCopy);
  }

  function deleteCartItem(index: number) {
    let cartCopy = [...cart];
    cartCopy.splice(index, 1);
    setCart(cartCopy);
  }

  function submitCart() {
    setSubmittedOrder([...submittedOrder, ...cart]);
  }

  return (
    <SubmittedOrderContext.Provider value={{ submittedOrder, submitCart }}>
      <CartContext.Provider
        value={{
          cart,
          addCartItem,
          updateCartItem,
          deleteCartItem,
        }}
      >
        <div className="bg-burger-img bg-no-repeat min-h-screen z-0 m-auto bg-black flex">
          <div className="bg-filter-img bg-no-repeat z-10 w-full flex flex-col">
            <Routes>
              <Route path="/food-items" element={<FoodItems />} />
              <Route path="/confirm-order" element={<ConfirmOrder />} />
              <Route path="/order-summary" element={<OrderSummary />} />
              <Route path="/" element={<Landing seatNo="12B" />} />
            </Routes>
          </div>
        </div>
      </CartContext.Provider>
    </SubmittedOrderContext.Provider>
  );
};

export default Layout;
