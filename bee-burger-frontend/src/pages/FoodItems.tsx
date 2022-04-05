import Header from "../components/Header";
import FoodItem from "../components/FoodItem";
import { FC, useContext, useEffect, useState } from "react";
import { CartContext } from "../context/Context";
import { CategoryIf, FoodItemIf, FoodSelectionItemIf } from "../common/types";
import foodItemsService from "../services/foodItems.service";
import categoryService from "../services/category.service";
import httpService from "../services/http.service";
import { useNavigate } from "react-router-dom";
import { CartItemIf } from "./../common/types";
import FoodSetModal from "../components/FoodItemModal";
import CalcUtil from "../utils/CalcUtil";
import isEqual from "lodash/isEqual";

const FoodItems: FC = () => {
  const [foodCategories, setFoodCategories] = useState<CategoryIf[]>([]);
  const [activeFoodCategory, setActiveFoodCategory] = useState(1);
  const [foodItems, setFoodItems] = useState<FoodItemIf[]>([]);
  const [selectedFoodItemIndex, setSelectedFoodItemIndex] = useState(0);
  const [selectedCategoryFoodId, setSelectedCategoryFoodId] = useState(1);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalItems, setModalItems] = useState<FoodItemIf[]>([]);
  const navigate = useNavigate();
  const { cart, addCartItem, updateCartItem } = useContext(CartContext);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const { data } = await categoryService.getAll();
      setFoodCategories(data);
      const firstCat = data.find((cat) => cat.id === 1);
      if (!firstCat) return;
      const foodItems = firstCat.isFoodSet
        ? await fetchFoodSetItems()
        : await fetchFoodItems();
      setFoodItems(foodItems);
    } catch (ex) {
      httpService.handleApiError(ex);
    }
  }

  async function fetchFoodSetItems(catId = 1) {
    const { data } = await foodItemsService.getFoodSetItems(catId);
    return data;
  }

  async function fetchFoodItems(catId = 1) {
    const { data } = await foodItemsService.getFoodItemsByCategory(catId);
    data.forEach((foodItem) => {
      const foodPreferences = foodItem.foodPreferences || [];
      foodPreferences.forEach((foodPreference) => {
        foodPreference.options.forEach((option) => {
          option.selected = option.defaultOption;
        });
      });
    });
    return data;
  }

  function getCategoryClasses(catId: number) {
    const classes = "p-4 cursor-pointer";
    return activeFoodCategory === catId ? classes + " active" : classes;
  }

  async function clickCatergoryItem(e: React.MouseEvent<HTMLElement>) {
    const currentEle: HTMLElement = e.currentTarget;
    const catId = parseInt(currentEle.getAttribute("data-entity-id") || "1");
    const targetCat = foodCategories.find((cat) => cat.id === catId);
    if (!targetCat) return;
    setActiveFoodCategory(catId);
    try {
      const foodItems = targetCat.isFoodSet
        ? await fetchFoodSetItems(catId)
        : await fetchFoodItems(catId);
      setFoodItems(foodItems);
    } catch (ex) {
      httpService.handleApiError(ex);
    }
  }

  async function selectCategoryFood(foodItemIndex: number, catId: number) {
    setModalOpen(true);
    const targetCat = foodCategories.find((cat) => cat.id === catId);
    if (!targetCat) return;
    setSelectedFoodItemIndex(foodItemIndex);
    setSelectedCategoryFoodId(catId);
    setModalTitle(targetCat.name);
    const foodItems = await fetchFoodItems(catId);
    setModalItems(foodItems);
  }

  function closeFoodItemModal() {
    setModalOpen(false);
    setModalItems([]);
  }

  function confirmFoodItemModal(item: FoodItemIf) {
    const selectedItem: FoodSelectionItemIf = {
      id: item.id,
      name: item.name,
      foodPreferences: item.foodPreferences,
    };
    const foodItemsCopy = [...foodItems];
    const foodSelectionCategories =
      foodItemsCopy[selectedFoodItemIndex].foodSelectionCategories || [];
    const targetCat = foodSelectionCategories.find(
      (cat) => cat.id === selectedCategoryFoodId
    );
    if (targetCat) {
      targetCat.foodItemSelected = selectedItem;
      setFoodItems(foodItemsCopy);
    }
    closeFoodItemModal();
  }

  function getUpdatedFoodPreference(
    item: FoodItemIf,
    currentFoodItems: FoodItemIf[],
    foodPreferenceIndex: number,
    optionIndex: number
  ) {
    const foodItemsCopy = [...currentFoodItems];
    const index = foodItemsCopy.indexOf(item);
    const foodPreferences = foodItemsCopy[index].foodPreferences;
    if (foodPreferences) {
      const options = foodPreferences[foodPreferenceIndex].options;
      if (options) {
        options.forEach((option) => {
          option.selected = false;
        });
        options[optionIndex].selected = true;
      }
    }
    return foodItemsCopy;
  }

  function selectFoodPreference(
    item: FoodItemIf,
    foodPreferenceIndex: number,
    optionIndex: number,
    isFromModal: boolean
  ) {
    const setFn = isFromModal ? setModalItems : setFoodItems;
    const targetItems = isFromModal ? modalItems : foodItems;
    setFn(
      getUpdatedFoodPreference(
        item,
        targetItems,
        foodPreferenceIndex,
        optionIndex
      )
    );
  }

  function addToCart(item: FoodItemIf) {
    const foodItem = foodItems[foodItems.indexOf(item)];

    let additionalPrice = 0;
    if (foodItem.foodSelectionCategories) {
      foodItem.foodSelectionCategories.forEach((cat) => {
        if (cat.foodItemSelected) {
          additionalPrice += CalcUtil.calcAdditionalPrice(
            cat.foodItemSelected.foodPreferences
          );
        }
      });
    }
    additionalPrice += CalcUtil.calcAdditionalPrice(foodItem.foodPreferences);

    const cartItem: CartItemIf = {
      foodId: foodItem.id,
      name: foodItem.name,
      description: foodItem.description,
      price: foodItem.price,
      img: foodItem.img,
      quantity: 1,
      additionalPrice,
      totalPrice: CalcUtil.calcTotalPrice(foodItem.price, additionalPrice, 1),
      editing: false,
      foodSelectionCategories: foodItem.foodSelectionCategories,
      foodPreferences: foodItem.foodPreferences,
    };

    const existingItem = cart.find(
      (item) =>
        isEqual(
          cartItem.foodSelectionCategories,
          item.foodSelectionCategories
        ) &&
        isEqual(cartItem.foodPreferences, item.foodPreferences) &&
        isEqual(cartItem.foodId, item.foodId)
    );
    if (existingItem) {
      cartItem.quantity = existingItem.quantity + 1;
      cartItem.totalPrice = CalcUtil.calcTotalPrice(
        cartItem.price,
        cartItem.additionalPrice,
        cartItem.quantity
      );
      updateCartItem(cart.indexOf(existingItem), cartItem);
    } else {
      addCartItem(cartItem);
    }
    navigate("/confirm-order");
  }

  return (
    <>
      <Header backUrl="/" />

      <div className="mt-20 pb-8 w-full px-4 bg-black menu-bg-min-height">
        <div className="border-b border-gray-700">
          <ul className="w-full flex justify-between items-center text-title-light-yellow">
            {foodCategories.map((foodCategory) => (
              <li
                className={getCategoryClasses(foodCategory.id)}
                data-choice-group="food-category"
                data-entity-id={foodCategory.id}
                key={foodCategory.id}
                onClick={(e) => clickCatergoryItem(e)}
              >
                {foodCategory.name}
              </li>
            ))}
          </ul>
        </div>

        {foodItems.map((foodItem, index) => (
          <FoodItem
            key={foodItem.id}
            foodItemIndex={index}
            foodItem={foodItem}
            selectFoodPreference={selectFoodPreference}
            selectCategoryFood={selectCategoryFood}
            clickConfirmBtn={addToCart}
            confirmBtnName="Add Cart"
            isFromModal={false}
          />
        ))}
      </div>

      <FoodSetModal
        selectedFoodItemIndex={selectedFoodItemIndex}
        modalOpen={modalOpen}
        modalTitle={modalTitle}
        modalItems={modalItems}
        closeFoodItemModal={closeFoodItemModal}
        selectFoodPreference={selectFoodPreference}
        confirmFoodItemModal={confirmFoodItemModal}
      />
    </>
  );
};

export default FoodItems;
