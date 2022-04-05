import { FC, useState } from "react";
import { FoodItemIf } from "../common/types";

interface FoodItemProps {
  foodItemIndex: number;
  foodItem: FoodItemIf;
  selectCategoryFood?: (foodItemIndex: number, catId: number) => void;
  selectFoodPreference: (
    item: FoodItemIf,
    foodPreferenceIndex: number,
    optionIndex: number,
    isFromModal: boolean
  ) => void;
  clickConfirmBtn: (item: FoodItemIf) => void;
  confirmBtnName: string;
  isFromModal: boolean;
}

const FoodItem: FC<FoodItemProps> = (props) => {
  const [showFoodPreference, setShowFoodPreference] = useState(false);

  function getOptionClasses(selected: boolean) {
    const classes =
      "rounded-lg border border-food-item-price px-4 mr-2 mb-2 w-fit";
    return selected ? classes + " active" : classes;
  }

  function getFoodPreferenceSectionClasses() {
    const classes = "mt-2 ml-4 mb-3 pr-4";
    return showFoodPreference ? classes : classes + " hidden";
  }

  function getConfirmBtnClasses() {
    const classes =
      "w-fit rounded-lg font-bold text-black text-sm bg-title-light-yellow px-4 py-1 mt-2";
    if (disableClickConfirmBtn()) {
      return classes + " opacity-40";
    }
    return classes;
  }

  function selectCategoryFood(foodItemIndex: number, catId: number) {
    if (props.selectCategoryFood) {
      props.selectCategoryFood(foodItemIndex, catId);
    }
  }

  function disableClickConfirmBtn() {
    if (!props.isFromModal) {
      if (
        props.foodItem.foodSelectionCategories &&
        props.foodItem.foodSelectionCategories.length > 0
      ) {
        const unselectedItem = props.foodItem.foodSelectionCategories.find(
          (c) => c.foodItemSelected == null
        );
        return unselectedItem != null;
      }
    }
    return false;
  }

  function clickFoodItem() {
    if (
      (props.foodItem.foodPreferences &&
        props.foodItem.foodPreferences.length > 0) ||
      (props.foodItem.foodSelectionCategories &&
        props.foodItem.foodSelectionCategories.length > 0)
    ) {
      if (!showFoodPreference) {
        setShowFoodPreference(true);
      }
    } else {
      props.clickConfirmBtn(props.foodItem);
    }
  }

  return (
    <div
      className="bg-food-item-bg text-title-light-yellow rounded-2xl mt-4 cursor-pointer"
      data-entity-id={props.foodItem.id}
      onClick={clickFoodItem}
    >
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="ml-4 my-3 flex flex-col justify-between">
            <div>
              <div>{props.foodItem.name}</div>
              <div className="opacity-40 text-xs mt-1 mb-2 desc-max-width">
                {props.foodItem.description}
              </div>
            </div>
            {!props.isFromModal && (
              <div className="text-food-item-price rounded-lg border border-food-item-price px-6 w-fit">
                ${props.foodItem.price}
              </div>
            )}
          </div>
          <div>
            <img
              src={props.foodItem.img}
              className="rounded-2xl"
              width="130"
              height="130"
              alt={props.foodItem.name}
            />
          </div>
        </div>

        <div className={getFoodPreferenceSectionClasses()}>
          {props.foodItem.foodSelectionCategories &&
            props.foodItem.foodSelectionCategories.map(
              (foodSelectionCategory) => (
                <div
                  className="flex justify-between mb-3"
                  key={foodSelectionCategory.id}
                  onClick={() =>
                    selectCategoryFood(
                      props.foodItemIndex,
                      foodSelectionCategory.id
                    )
                  }
                >
                  <div>
                    {foodSelectionCategory.foodItemSelected
                      ? foodSelectionCategory.foodItemSelected.name
                      : foodSelectionCategory.name}
                  </div>
                  <div className="flex justify-between items-center">
                    <img
                      src="/img/right_arrow.png"
                      alt="right_arrow"
                      width="7"
                      height="14"
                    />
                  </div>
                </div>
              )
            )}
          {props.foodItem.foodPreferences &&
            props.foodItem.foodPreferences.map(
              (foodPreference, foodPreferenceIndex) => (
                <div className="mb-3" key={foodPreference.id}>
                  <div className="mb-2">{foodPreference.question}</div>
                  <div className="flex flex-wrap text-food-item-price text-sm">
                    {foodPreference.options.map((option, optionIndex) => (
                      <div
                        className={getOptionClasses(option.selected)}
                        data-choice-group="food-preference"
                        key={option.id}
                        onClick={() =>
                          props.selectFoodPreference(
                            props.foodItem,
                            foodPreferenceIndex,
                            optionIndex,
                            props.isFromModal
                          )
                        }
                      >
                        {option.optionContent}
                        {option.additionalPrice > 0 &&
                          ` (+$${option.additionalPrice})`}
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          <button
            type="button"
            className={getConfirmBtnClasses()}
            onClick={() => props.clickConfirmBtn(props.foodItem)}
            disabled={disableClickConfirmBtn()}
          >
            {props.confirmBtnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
