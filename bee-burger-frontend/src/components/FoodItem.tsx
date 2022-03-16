import { FC, useState } from "react";
import { FoodItemIf } from "../common/types";

interface FoodItemProps {
  foodItem: FoodItemIf;
  selectFoodPreference: (
    item: FoodItemIf,
    foodPreferenceIndex: number,
    optionIndex: number
  ) => void;
  addToCart: (item: FoodItemIf) => void;
}

const FoodItem: FC<FoodItemProps> = (props) => {
  const [showFoodPreference, setShowFoodPreference] = useState(false);

  function getOptionClasses(selected: boolean) {
    const classes =
      "rounded-lg border border-food-item-price px-4 mr-2 mb-2 w-fit";
    return selected ? classes + " active" : classes;
  }

  function getFoodPreferenceSectionClasses() {
    return showFoodPreference ? "" : "hidden";
  }

  function clickFoodItem() {
    if (
      props.foodItem.foodPreferences &&
      props.foodItem.foodPreferences.length > 0
    ) {
      if (!showFoodPreference) {
        setShowFoodPreference(true);
      }
    } else {
      props.addToCart(props.foodItem);
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
            <div className="text-food-item-price rounded-lg border border-food-item-price px-6 w-fit">
              ${props.foodItem.price}
            </div>
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
          {props.foodItem.foodPreferences &&
            props.foodItem.foodPreferences.map(
              (foodPreference, foodPreferenceIndex) => (
                <div className="mt-2 ml-4 mb-3 pr-4" key={foodPreference.id}>
                  <div className="mb-3">
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
                              optionIndex
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
                  <button
                    type="button"
                    className="w-fit rounded-lg font-bold text-black text-sm bg-title-light-yellow px-4 py-1 mt-2"
                    onClick={() => props.addToCart(props.foodItem)}
                  >
                    Add Cart
                  </button>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
