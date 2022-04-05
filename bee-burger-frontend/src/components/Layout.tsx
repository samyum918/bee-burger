import Landing from "../pages/Landing";
import FoodItems from "../pages/FoodItems";
import ConfirmOrder from "../pages/ConfirmOrder";
import OrderSummary from "../pages/OrderSummary";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { CartContext, SubmittedOrderContext } from "../context/Context";
import { CartItemIf, OrderIf } from "../common/types";
import PageNotFound from "../pages/PageNotFound";
import foodItemsService from "../services/foodItems.service";
import httpService from "../services/http.service";

const Layout = () => {
  const [cart, setCart] = useState<CartItemIf[]>([]);
  const [submittedOrder, setSubmittedOrder] = useState<CartItemIf[]>([]);

  function addCartItem(item: CartItemIf) {
    const cartCopy = [...cart];
    cartCopy.push(item);
    setCart(cartCopy);
  }

  function updateCartItem(index: number, item: CartItemIf) {
    const cartCopy = [...cart];
    cartCopy[index] = item;
    setCart(cartCopy);
  }

  function deleteCartItem(index: number) {
    const cartCopy = [...cart];
    cartCopy.splice(index, 1);
    setCart(cartCopy);
  }

  function emptyCartItem() {
    setCart([]);
  }

  async function submitCart() {
    const customerInfo = sessionStorage.getItem("customerInfo") || "";
    const customerInfoJson = JSON.parse(customerInfo);
    const order: OrderIf = {
      customerId: customerInfoJson.customerId,
      orderedFood: cart.map((c) => {
        return {
          foodId: c.foodId,
          quantity: c.quantity,
          totalPrice: c.totalPrice,
          subCategoryFoods: c.foodSetSubcategories?.map((c) => {
            return {
              foodId: c.foodItemSelected!.id,
              foodOptionIds:
                c.foodItemSelected!.foodPreferences?.map((p) => {
                  return p.options.filter((o) => o.selected)[0].id;
                }) || [],
            };
          }),
          foodOptionIds:
            c.foodPreferences?.map((p) => {
              return p.options.filter((o) => o.selected)[0].id;
            }) || [],
        };
      }),
    };
    try {
      await foodItemsService.submitOrder(order);
      setSubmittedOrder([...submittedOrder, ...cart]);
      emptyCartItem();
    } catch (ex) {
      httpService.handleApiError(ex);
    }
  }

  function RestrictedRoute({ children }: { children: JSX.Element }) {
    const customerInfo = sessionStorage.getItem("customerInfo") || "";
    const customerInfoJson = JSON.parse(customerInfo);
    if (customerInfoJson.customerId && customerInfoJson.seatNo) {
      return children;
    } else {
      return <Navigate to="/page-not-found" />;
    }
  }

  return (
    <SubmittedOrderContext.Provider value={{ submittedOrder, submitCart }}>
      <CartContext.Provider
        value={{
          cart,
          addCartItem,
          updateCartItem,
          deleteCartItem,
          emptyCartItem,
        }}
      >
        <div className="bg-burger-img bg-no-repeat min-h-screen z-0 m-auto bg-black flex">
          <div className="bg-filter-img bg-no-repeat z-10 w-full flex flex-col">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route
                path="/food-items"
                element={
                  <RestrictedRoute>
                    <FoodItems />
                  </RestrictedRoute>
                }
              />
              <Route
                path="/confirm-order"
                element={
                  <RestrictedRoute>
                    <ConfirmOrder />
                  </RestrictedRoute>
                }
              />
              <Route
                path="/order-summary"
                element={
                  <RestrictedRoute>
                    <OrderSummary />
                  </RestrictedRoute>
                }
              />
              <Route path="/page-not-found" element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
      </CartContext.Provider>
    </SubmittedOrderContext.Provider>
  );
};

export default Layout;
