import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ConfirmOrderItem from "../components/ConfirmOrderItem";

export interface ConfirmOrderItemObj {
  name: string;
  description: string;
  price: string;
  img: string;
  quantity: number;
  totalPrice: string;
}

const ConfirmOrder = () => {
  const [confirmOrderItems, setConfirmOrderItems] = useState<
    ConfirmOrderItemObj[]
  >([
    {
      name: "Burger1",
      description: "abcde abcde abcde abcde abcde",
      price: "30",
      img: "/img/burger1.png",
      quantity: 1,
      totalPrice: "30",
    },
    {
      name: "Burger2",
      description: "abcde abcde abcde abcde abcde",
      price: "30",
      img: "/img/burger2.png",
      quantity: 1,
      totalPrice: "30",
    },
  ]);

  useEffect(() => {});

  function addQuantity(item: ConfirmOrderItemObj) {
    const confirmOrderItemsCopy = [...confirmOrderItems];
    const index = confirmOrderItemsCopy.indexOf(item);
    confirmOrderItemsCopy[index].quantity++;
    setConfirmOrderItems(confirmOrderItemsCopy);
  }

  function substractQuantity(item: ConfirmOrderItemObj) {
    const confirmOrderItemsCopy = [...confirmOrderItems];
    const index = confirmOrderItemsCopy.indexOf(item);
    if (confirmOrderItemsCopy[index].quantity > 1) {
      confirmOrderItemsCopy[index].quantity--;
      setConfirmOrderItems(confirmOrderItemsCopy);
    }
  }

  function deleteItem(item: ConfirmOrderItemObj) {
    const confirmOrderItemsCopy = [...confirmOrderItems];
    const index = confirmOrderItemsCopy.indexOf(item);
    confirmOrderItemsCopy.splice(index, 1);
    setConfirmOrderItems(confirmOrderItemsCopy);
  }

  return (
    <>
      <Header seatNo="12B" backUrl="/food-items" />

      <div className="mt-20 pb-8 w-full px-4 bg-black menu-bg-min-height">
        <div className="border-b border-gray-700 flex justify-center items-center text-title-light-yellow">
          <div className="flex my-4">
            <img src="/img/cart_icon.png" alt="cart_icon" />
            <div className="ml-6 font-semibold">Cart Item(s)</div>
          </div>
        </div>

        <div className="mt-6 bg-food-item-bg px-2 pb-2 text-title-light-yellow rounded-2xl">
          {confirmOrderItems.map((item, index) => (
            <ConfirmOrderItem
              item={item}
              addQuantity={addQuantity}
              substractQuantity={substractQuantity}
              deleteItem={deleteItem}
              key={index}
            />
          ))}
        </div>

        <div className="bg-title-light-yellow/30 text-title-light-yellow rounded-2xl">
          <div className="flex justify-between items-center pl-5 pr-6 py-4 text-lg font-semibold">
            <div>Total</div>
            <div>$60.00</div>
          </div>
        </div>

        <Link className="w-full" to="/order-summary">
          <button
            type="button"
            className="mt-20 w-full rounded-xl font-bold text-black bg-title-light-yellow h-11"
          >
            Confirm order
          </button>
        </Link>
      </div>
    </>
  );
};

export default ConfirmOrder;
