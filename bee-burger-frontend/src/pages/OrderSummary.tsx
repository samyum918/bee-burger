import { useContext } from "react";
import Header from "../components/Header";
import { SubmittedOrderContext } from "../context/Context";

const OrderSummary = () => {
  const { submittedOrder } = useContext(SubmittedOrderContext);

  function getOptionClasses(selected: boolean) {
    let classes =
      "rounded-lg border border-food-item-price px-4 mr-2 mb-2 w-fit";
    return selected ? classes + " active" : classes;
  }

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
            <div>
              Total Bill: $
              {submittedOrder.reduce((n, { totalPrice }) => n + totalPrice, 0)}
            </div>
          </div>
        </div>

        <div className="my-6 bg-food-item-bg px-2 pb-2 text-title-light-yellow rounded-2xl">
          {submittedOrder.map((order) => (
            <div className="pt-1 pb-2">
              <div className="pt-2 flex">
                <div>
                  <img
                    src={order.img}
                    width="55"
                    height="55"
                    alt={order.name}
                  />
                </div>
                <div className="ml-2">
                  <div>{order.name}</div>
                  <div className="opacity-40 text-xs mt-1">
                    {order.description}
                  </div>
                </div>
              </div>

              <div className="mt-2 pl-2 pr-4 pb-2 mb-3 border-b border-gray-700 opacity-40 text-sm">
                <div className="flex justify-between">
                  <div>Product Price</div>
                  <div>${order.price}</div>
                </div>
                <div>
                  {order.foodPreferences &&
                    order.foodPreferences.map((foodPreference) => (
                      <div className="mb-3" key={foodPreference.id}>
                        <div className="mb-3">
                          <div className="mb-2">{foodPreference.question}</div>
                          <div className="flex flex-wrap text-food-item-price text-sm">
                            {foodPreference.options.map((option) => (
                              <div
                                className={getOptionClasses(option.selected)}
                                data-choice-group="food-preference"
                                key={option.id}
                              >
                                {option.optionContent}
                                {option.additionalPrice > 0 &&
                                  ` $${option.additionalPrice}`}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OrderSummary;