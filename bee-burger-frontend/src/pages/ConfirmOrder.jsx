import Header from "../components/Header";
import { Link } from "react-router-dom";

const ConfirmOrder = () => {
  return (
    <>
      <Header seatNo="12B" back="/food-items" />

      <div className="mt-20 pb-8 w-full px-4 bg-black menu-bg-min-height">
        <div className="border-b border-gray-700 flex justify-center items-center text-title-light-yellow">
          <div className="flex my-4">
            <img src="/img/cart_icon.png" alt="cart_icon" />
            <div className="ml-6 font-semibold">Cart Item(s)</div>
          </div>
        </div>

        <div className="my-6 bg-food-item-bg px-2 pb-2 text-title-light-yellow rounded-2xl">
          <div className="pt-1 pb-2">
            <div className="pt-2 flex">
              <div>
                <img
                  src="/img/burger1.png"
                  width="55"
                  height="55"
                  alt="burger1"
                />
              </div>
              <div className="ml-2">
                <div>Burger1</div>
                <div className="opacity-40 text-xs mt-1">
                  abcde abcde abcde abcde abcde
                </div>
              </div>
            </div>

            <div className="mt-2 pl-2 pr-4 pb-2 mb-3 border-b border-gray-700">
              <div className="flex justify-between opacity-40 text-sm">
                <div>GST Tax</div>
                <div>$1</div>
              </div>
              <div className="flex justify-between opacity-40 text-sm">
                <div>Product Price</div>
                <div>$29</div>
              </div>
            </div>

            <div className="mt-2 pl-2 pr-4 flex justify-between">
              <div className="bg-black rounded-xl p-2">
                <img
                  src="/img/delete.png"
                  width="15"
                  height="17"
                  alt="delete_icon"
                />
              </div>
              <div className="flex justify-between items-center w-1/3">
                <div className="bg-black rounded-xl minus-icon">
                  <img
                    src="/img/minus.png"
                    width="14"
                    height="2"
                    alt="minus_icon"
                  />
                </div>
                <div>1</div>
                <div className="bg-black rounded-xl px-2 py-2">
                  <img
                    src="/img/plus.png"
                    width="13"
                    height="13"
                    alt="plus_icon"
                  />
                </div>
              </div>

              <div className="flex items-center">$30.00</div>
            </div>
          </div>
          <div className="pt-1 pb-2">
            <div className="pt-2 flex">
              <div>
                <img
                  src="/img/burger2.png"
                  width="55"
                  height="55"
                  alt="burger2"
                />
              </div>
              <div className="ml-2">
                <div>Burger2</div>
                <div className="opacity-40 text-xs mt-1">
                  abcde abcde abcde abcde abcde
                </div>
              </div>
            </div>

            <div className="mt-2 pl-2 pr-4 pb-2 mb-3 border-b border-gray-700">
              <div className="flex justify-between opacity-40 text-sm">
                <div>GST Tax</div>
                <div>$1</div>
              </div>
              <div className="flex justify-between opacity-40 text-sm">
                <div>Product Price</div>
                <div>$29</div>
              </div>
            </div>

            <div className="mt-2 pl-2 pr-4 flex justify-between">
              <div className="bg-black rounded-xl p-2">
                <img
                  src="/img/delete.png"
                  width="15"
                  height="17"
                  alt="delete_icon"
                />
              </div>
              <div className="flex justify-between items-center w-1/3">
                <div className="bg-black rounded-xl minus-icon">
                  <img
                    src="/img/minus.png"
                    width="14"
                    height="2"
                    alt="minus_icon"
                  />
                </div>
                <div>1</div>
                <div className="bg-black rounded-xl px-2 py-2">
                  <img
                    src="/img/plus.png"
                    width="13"
                    height="13"
                    alt="plus_icon"
                  />
                </div>
              </div>

              <div className="flex items-center">$30.00</div>
            </div>
          </div>
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
