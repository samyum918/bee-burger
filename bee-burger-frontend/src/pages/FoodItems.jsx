import Header from "../components/Header";
import { Link } from "react-router-dom";

const FoodItems = () => {
  return (
    <>
      <Header seatNo="12B" back="/" />

      <div className="mt-32 mb-8 w-full px-4 bg-black">
        <div className="border-b border-gray-700">
          <ul className="w-full flex justify-between items-center text-title-light-yellow">
            <li data-navbar="category" class="p-4">
              Set
            </li>
            <li data-navbar="category" class="p-4 active">
              Burger
            </li>
            <li data-navbar="category" class="p-4">
              Snack
            </li>
            <li data-navbar="category" class="p-4">
              Drink
            </li>
          </ul>
        </div>

        <Link to="/confirm-order">
          <div className="mt-4">
            <div className="bg-food-item-bg text-title-light-yellow flex justify-between rounded-2xl">
              <div className="ml-4 my-3 flex flex-col justify-between">
                <div>
                  <div>Burger1</div>
                  <div className="opacity-40 text-xs mt-1">
                    abcde abcde abcde abcde abcde
                  </div>
                </div>
                <div className="text-food-item-price rounded-lg border border-food-item-price px-6 w-fit">
                  $59.00
                </div>
              </div>
              <div>
                <img
                  src="/img/burger1.png"
                  width="130"
                  height="130"
                  alt="burger1"
                />
              </div>
            </div>
          </div>
        </Link>

        <div className="mt-4">
          <div className="bg-food-item-bg text-title-light-yellow flex justify-between rounded-2xl">
            <div className="ml-4 my-3 flex flex-col justify-between">
              <div>
                <div>Burger2</div>
                <div className="opacity-40 text-xs mt-1">
                  abcde abcde abcde abcde abcde
                </div>
              </div>
              <div className="text-food-item-price rounded-lg border border-food-item-price px-6 w-fit">
                $59.00
              </div>
            </div>
            <div>
              <img
                src="/img/burger2.png"
                width="130"
                height="130"
                alt="burger1"
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="bg-food-item-bg text-title-light-yellow flex justify-between rounded-2xl">
            <div className="ml-4 my-3 flex flex-col justify-between">
              <div>
                <div>Burger3</div>
                <div className="opacity-40 text-xs mt-1">
                  abcde abcde abcde abcde abcde
                </div>
              </div>
              <div className="text-food-item-price rounded-lg border border-food-item-price px-6 w-fit">
                $59.00
              </div>
            </div>
            <div>
              <img
                src="/img/burger3.png"
                width="130"
                height="130"
                alt="burger1"
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="bg-food-item-bg text-title-light-yellow flex justify-between rounded-2xl">
            <div className="ml-4 my-3 flex flex-col justify-between">
              <div>
                <div>Burger4</div>
                <div className="opacity-40 text-xs mt-1">
                  abcde abcde abcde abcde abcde
                </div>
              </div>
              <div className="text-food-item-price rounded-lg border border-food-item-price px-6 w-fit">
                $59.00
              </div>
            </div>
            <div>
              <img
                src="/img/burger4.png"
                width="130"
                height="130"
                alt="burger1"
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="bg-food-item-bg text-title-light-yellow flex justify-between rounded-2xl">
            <div className="ml-4 my-3 flex flex-col justify-between">
              <div>
                <div>Burger5</div>
                <div className="opacity-40 text-xs mt-1">
                  abcde abcde abcde abcde abcde
                </div>
              </div>
              <div className="text-food-item-price rounded-lg border border-food-item-price px-6 w-fit">
                $59.00
              </div>
            </div>
            <div>
              <img
                src="/img/burger5.png"
                width="130"
                height="130"
                alt="burger1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodItems;
