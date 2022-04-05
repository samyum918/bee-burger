import Header from "../components/Header";
import { useContext } from "react";
import CartItem from "../components/CartItem";
import { CartItemIf } from "../common/types";
import { CartContext, SubmittedOrderContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import CalcUtil from "../utils/CalcUtil";

const ConfirmOrder = () => {
  const { cart, updateCartItem, deleteCartItem } = useContext(CartContext);
  const { submitCart } = useContext(SubmittedOrderContext);
  const navigate = useNavigate();

  function addQuantity(item: CartItemIf) {
    const cartCopy = [...cart];
    const index = cartCopy.indexOf(item);
    const targetItem = cartCopy[index];
    targetItem.quantity++;
    targetItem.totalPrice = CalcUtil.calcTotalPrice(
      targetItem.price,
      targetItem.additionalPrice,
      targetItem.quantity
    );
    updateCartItem(index, targetItem);
  }

  function substractQuantity(item: CartItemIf) {
    const cartCopy = [...cart];
    const index = cartCopy.indexOf(item);
    const targetItem = cartCopy[index];
    if (targetItem.quantity > 1) {
      targetItem.quantity--;
      targetItem.totalPrice = CalcUtil.calcTotalPrice(
        targetItem.price,
        targetItem.additionalPrice,
        targetItem.quantity
      );
      updateCartItem(index, targetItem);
    }
  }

  function editItem(item: CartItemIf) {
    const cartCopy = [...cart];
    const index = cartCopy.indexOf(item);
    const targetItem = cartCopy[index];
    targetItem.editing = !targetItem.editing;
    updateCartItem(index, targetItem);
  }

  function deleteItem(item: CartItemIf) {
    const cartCopy = [...cart];
    const index = cartCopy.indexOf(item);
    deleteCartItem(index);
  }

  function selectFoodPreference(
    item: CartItemIf,
    foodPreferenceIndex: number,
    optionIndex: number,
    foodSelectionCategoryIndex?: number
  ) {
    const cartCopy = [...cart];
    const index = cartCopy.indexOf(item);
    const targetItem = cartCopy[index];
    const foodPreferences =
      typeof foodSelectionCategoryIndex === "number"
        ? targetItem.foodSetSubcategories![foodSelectionCategoryIndex]
            .foodItemSelected!.foodPreferences
        : targetItem.foodPreferences;

    if (foodPreferences) {
      const options = foodPreferences[foodPreferenceIndex].options;
      if (options) {
        options.forEach((option) => {
          if (option.selected) {
            option.selected = false;
            if (option.additionalPrice > 0) {
              targetItem.additionalPrice -= option.additionalPrice;
            }
          }
        });
        options[optionIndex].selected = true;
        if (options[optionIndex].additionalPrice > 0) {
          targetItem.additionalPrice += options[optionIndex].additionalPrice;
        }
      }
    }
    targetItem.totalPrice = CalcUtil.calcTotalPrice(
      targetItem.price,
      targetItem.additionalPrice,
      targetItem.quantity
    );

    updateCartItem(index, cartCopy[index]);
  }

  function confirmOrder() {
    submitCart();
    navigate("/order-summary");
  }

  return (
    <>
      <Header backUrl="/food-items" />

      <div className="mt-20 pb-8 w-full px-4 bg-black menu-bg-min-height">
        <div className="border-b border-gray-700 flex justify-center items-center text-title-light-yellow">
          <div className="flex my-4">
            <img src="/img/cart_icon.png" alt="cart_icon" />
            <div className="ml-6 font-semibold">Cart Item(s)</div>
          </div>
        </div>

        <div className="mt-6 bg-food-item-bg px-2 pb-2 text-title-light-yellow rounded-2xl">
          {cart.length === 0 && (
            <div className="flex justify-center items-center h-16 text-xl font-semibold">
              No Item!
            </div>
          )}
          {cart.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              addQuantity={addQuantity}
              substractQuantity={substractQuantity}
              editItem={editItem}
              deleteItem={deleteItem}
              selectFoodPreference={selectFoodPreference}
            />
          ))}
        </div>

        <div className="bg-title-light-yellow/30 text-title-light-yellow rounded-2xl">
          <div className="flex justify-between items-center pl-5 pr-6 py-4 text-lg font-semibold">
            <div>Total</div>
            <div>${cart.reduce((n, { totalPrice }) => n + totalPrice, 0)}</div>
          </div>
        </div>

        <button
          type="button"
          className="mt-20 w-full rounded-xl font-bold text-black bg-title-light-yellow h-11"
          onClick={confirmOrder}
        >
          Confirm order
        </button>
      </div>
    </>
  );
};

export default ConfirmOrder;
