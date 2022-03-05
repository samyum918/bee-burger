import Header from "../components/Header";

const OrderSummary = () => {
  return (
    <>
      <Header seatNo="12B" backUrl="/food-items" />

      <div className="mt-20 pb-8 w-full px-4 bg-black menu-bg-min-height">
        <div className="border-b border-gray-700 flex justify-center items-center text-title-light-yellow">
          <div className="my-4 w-full flex justify-between font-semibold">
            <div className="flex">
              <img src="/img/note.png" alt="note" />
              <div className="ml-2">Order Summary</div>
            </div>
            <div>Total Bill: $60.00</div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
