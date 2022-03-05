import Header from "../components/Header";
import { Link } from "react-router-dom";
import FoodItem from "../components/FoodItem";
import { useState } from "react";

const FoodItems = () => {
  const [foodCategories, setFoodCategories] = useState<string[]>([
    "Set",
    "Burger",
    "Snack",
    "Drink",
  ]);
  const [activeFoodCategory, setActiveFoodCategory] = useState(0);

  function getCatergoryItems(e: React.MouseEvent<HTMLElement>) {
    const categoryEle: HTMLElement = e.currentTarget;
    setActiveFoodCategory(
      parseInt(categoryEle.getAttribute("data-index") || "0")
    );
  }

  function getCategoryClasses(currentFoodCategory: number) {
    let classes = "p-4 cursor-pointer";
    return activeFoodCategory === currentFoodCategory
      ? classes + " active"
      : classes;
  }

  return (
    <>
      <Header seatNo="12B" backUrl="/" />

      <div className="mt-20 pb-8 w-full px-4 bg-black menu-bg-min-height">
        <div className="border-b border-gray-700">
          <ul className="w-full flex justify-between items-center text-title-light-yellow">
            {foodCategories.map((foodCategory, index) => (
              <li
                className={getCategoryClasses(index)}
                data-choice-group="food-category"
                data-index={index}
                key={index}
                onClick={(e) => getCatergoryItems(e)}
              >
                {foodCategory}
              </li>
            ))}
          </ul>
        </div>

        <Link to="/confirm-order">
          <FoodItem
            name="Bee Classic"
            description="abcde abcde abcde abcde abcde"
            price="59.00"
            img="/img/burger1.png"
          />
        </Link>

        <FoodItem
          name="Giga Bites"
          description="abcde abcde abcde abcde abcde"
          price="92.00"
          img="/img/burger2.png"
        />

        <FoodItem
          name="Burger3"
          description="abcde abcde abcde abcde abcde"
          price="59.00"
          img="/img/burger3.png"
        />

        <FoodItem
          name="Burger4"
          description="abcde abcde abcde abcde abcde"
          price="59.00"
          img="/img/burger4.png"
        />

        <FoodItem
          name="Burger5"
          description="abcde abcde abcde abcde abcde"
          price="59.00"
          img="/img/burger5.png"
        />
      </div>
    </>
  );
};

export default FoodItems;
