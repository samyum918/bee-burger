import { FC, useState } from "react";
import { CartItemIf } from "../common/types";

interface CartItemProps {
  item: CartItemIf;
  addQuantity: (item: CartItemIf) => void;
  substractQuantity: (item: CartItemIf) => void;
  editItem: (item: CartItemIf) => void;
  deleteItem: (item: CartItemIf) => void;
  selectFoodPreference: (
    item: CartItemIf,
    foodPreferenceIndex: number,
    optionIndex: number
  ) => void;
}

const CartItem: FC<CartItemProps> = (props) => {
  function getFoodPreferenceclasses(editing: boolean) {
    let classes = "opacity-40 text-sm";
    return editing ? classes + " active" : classes;
  }

  function getOptionClasses(selected: boolean) {
    let classes =
      "rounded-lg border border-food-item-price px-4 mr-2 mb-2 w-fit";
    return selected ? classes + " active" : classes;
  }

  function selectFoodPreferenceOnEdit(
    item: CartItemIf,
    foodPreferenceIndex: number,
    optionIndex: number
  ) {
    if (item.editing) {
      props.selectFoodPreference(item, foodPreferenceIndex, optionIndex);
    }
  }

  return (
    <div className="pt-1 pb-2">
      <div className="pt-2 flex justify-between">
        <div className="flex">
          <img
            src={props.item.img}
            width="55"
            height="55"
            alt={props.item.name}
            className="rounded-xl"
          />
          <div className="ml-2">
            <div>{props.item.name}</div>
            <div className="opacity-40 text-xs mt-1 mb-1">
              {props.item.description}
            </div>
          </div>
        </div>
        {props.item.foodPreferences && (
          <div
            className="bg-black rounded-xl p-2 cursor-pointer mr-2 h-fit"
            onClick={() => props.editItem(props.item)}
          >
            {props.item.editing ? (
              <img src="/img/tick.png" width="15" height="15" alt="edit_icon" />
            ) : (
              <img src="/img/edit.png" width="15" height="15" alt="edit_icon" />
            )}
          </div>
        )}
      </div>

      <div className="mt-2 pl-2 pr-4 pb-2 mb-3 border-b border-gray-700">
        <div className="flex justify-between opacity-40 text-sm">
          <div>Product Price</div>
          <div>${props.item.price}</div>
        </div>
        <div
          className={getFoodPreferenceclasses(props.item.editing)}
          data-edit="cart-item"
        >
          {props.item.foodPreferences &&
            props.item.foodPreferences.map(
              (foodPreference, foodPreferenceIndex) => (
                <div
                  className="mt-2 flex justify-between"
                  key={foodPreference.id}
                >
                  <div>
                    <div className="mb-2">{foodPreference.question}</div>
                    <div className="flex flex-wrap text-food-item-price text-sm">
                      {foodPreference.options.map((option, optionIndex) => (
                        <div
                          className={getOptionClasses(option.selected)}
                          data-choice-group="food-preference"
                          key={option.id}
                          onClick={() =>
                            selectFoodPreferenceOnEdit(
                              props.item,
                              foodPreferenceIndex,
                              optionIndex
                            )
                          }
                        >
                          {option.optionContent}
                          {option.additionalPrice > 0 &&
                            ` $${option.additionalPrice}`}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    {foodPreference.options &&
                      foodPreference.options.filter(
                        (o) => o.selected && o.additionalPrice > 0
                      ).length > 0 &&
                      "$" +
                        foodPreference.options.filter(
                          (o) => o.selected && o.additionalPrice > 0
                        )[0].additionalPrice}
                  </div>
                </div>
              )
            )}
        </div>
      </div>

      <div className="mt-2 pl-2 pr-4 flex justify-between">
        <div
          className="bg-black rounded-xl p-2 cursor-pointer"
          onClick={() => props.deleteItem(props.item)}
        >
          <img src="/img/delete.png" width="15" height="17" alt="delete_icon" />
        </div>

        <div className="flex justify-between items-center w-1/3">
          <div
            className="bg-black rounded-xl minus-icon cursor-pointer"
            onClick={() => props.substractQuantity(props.item)}
          >
            <img src="/img/minus.png" width="14" height="2" alt="minus_icon" />
          </div>

          <div>{props.item.quantity}</div>

          <div
            className="bg-black rounded-xl px-2 py-2 cursor-pointer"
            onClick={() => props.addQuantity(props.item)}
          >
            <img src="/img/plus.png" width="13" height="13" alt="plus_icon" />
          </div>
        </div>

        <div className="flex items-center">${props.item.totalPrice}</div>
      </div>
    </div>
  );
};

export default CartItem;
