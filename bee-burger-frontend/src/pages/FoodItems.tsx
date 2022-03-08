import Header from "../components/Header";
import FoodItem from "../components/FoodItem";
import { FC, useContext, useEffect, useState } from "react";
import { CartContext } from "../context/Context";
import { CategoryIf, FoodItemIf } from "../common/types";
import foodItemsService from "../services/foodItemsService";
import httpService from "../services/httpService";
import { useNavigate } from "react-router-dom";
import { CartItemIf } from "./../common/types";

interface FoodItemsProps {}

const FoodItems: FC<FoodItemsProps> = () => {
  const [foodCategories, setFoodCategories] = useState<CategoryIf[]>([]);
  const [activeFoodCategory, setActiveFoodCategory] = useState(1);
  const [foodItems, setFoodItems] = useState<FoodItemIf[]>([]);
  const navigate = useNavigate();
  const { addCartItem } = useContext(CartContext);

  useEffect(() => {
    fetchCatergories();
    fetchFoodItems();
  }, []);

  async function fetchCatergories() {
    try {
      const response = await foodItemsService.getCatergories();
      setFoodCategories(response.data);
    } catch (ex) {
      httpService.handleApiError(ex);
    }
  }

  async function fetchFoodItems(catId: number = 1) {
    try {
      const response = await foodItemsService.getFoodItemsByCategory(catId);
      let foodItemList: FoodItemIf[] = response.data;
      if (foodItemList) {
        foodItemList.forEach((foodItem) => {
          if (foodItem.foodPreferences) {
            foodItem.foodPreferences.forEach((foodPreference) => {
              foodPreference.options.forEach((option) => {
                option.selected = false;
              });
            });
          }
        });
      }
      setFoodItems(foodItemList);
    } catch (ex) {
      httpService.handleApiError(ex);
    }
  }

  function getCatergoryItems(e: React.MouseEvent<HTMLElement>) {
    const currentEle: HTMLElement = e.currentTarget;
    const catId = parseInt(currentEle.getAttribute("data-entity-id") || "1");
    setActiveFoodCategory(catId);
    fetchFoodItems(catId);
  }

  function getCategoryClasses(currentFoodCategory: number) {
    let classes = "p-4 cursor-pointer";
    return activeFoodCategory === currentFoodCategory
      ? classes + " active"
      : classes;
  }

  function selectFoodPreference(
    item: FoodItemIf,
    foodPreferenceIndex: number,
    optionIndex: number
  ) {
    const foodItemsCopy = [...foodItems];
    const index = foodItemsCopy.indexOf(item);
    let foodPreferences = foodItemsCopy[index].foodPreferences;
    if (foodPreferences) {
      let options = foodPreferences[foodPreferenceIndex].options;
      if (options) {
        options.forEach((option) => {
          option.selected = false;
        });
        options[optionIndex].selected = true;
      }
    }

    setFoodItems(foodItemsCopy);
  }

  function addToCart(item: FoodItemIf) {
    const foodItem = foodItems[foodItems.indexOf(item)];
    const cartItem: CartItemIf = {
      foodId: foodItem.id,
      name: foodItem.name,
      description: foodItem.description,
      price: foodItem.price,
      img: foodItem.img,
      quantity: 1,
      totalPrice: foodItem.price,
      foodPreferences: foodItem.foodPreferences,
    };
    addCartItem(cartItem);
    navigate("/confirm-order");
  }

  return (
    <>
      <Header seatNo="12B" backUrl="/" />

      <div className="mt-20 pb-8 w-full px-4 bg-black menu-bg-min-height">
        <div className="border-b border-gray-700">
          <ul className="w-full flex justify-between items-center text-title-light-yellow">
            {foodCategories.map((foodCategory) => (
              <li
                className={getCategoryClasses(foodCategory.id)}
                data-choice-group="food-category"
                data-entity-id={foodCategory.id}
                key={foodCategory.id}
                onClick={(e) => getCatergoryItems(e)}
              >
                {foodCategory.name}
              </li>
            ))}
          </ul>
        </div>

        {foodItems.map((foodItem) => (
          <FoodItem
            key={foodItem.id}
            foodItem={foodItem}
            selectFoodPreference={selectFoodPreference}
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
