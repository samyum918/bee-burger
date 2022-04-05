import { FC } from "react";
import { FoodItemIf } from "../common/types";
import FoodItem from "./FoodItem";

interface FoodItemModalProps {
  selectedFoodItemIndex: number;
  modalOpen: boolean;
  modalTitle: string;
  modalItems: FoodItemIf[];
  closeFoodItemModal: () => void;
  selectFoodPreference: (
    item: FoodItemIf,
    foodPreferenceIndex: number,
    optionIndex: number,
    isFromModal: boolean
  ) => void;
  confirmFoodItemModal: (item: FoodItemIf) => void;
}

const FoodItemModal: FC<FoodItemModalProps> = (props) => {
  function getModalClasses() {
    const classes =
      "backdrop-blur-sm overflow-y-auto overflow-x-hidden screen-max-width m-auto fixed top-0 right-0 left-0 z-50 h-full";
    return props.modalOpen ? classes : classes + " hidden";
  }

  return (
    <div className={getModalClasses()}>
      <div className="fixed bg-black w-full h-3/4 top-1/4 rounded-t-2xl">
        <div className="flex justify-between items-center px-5 pt-3 pb-5 border-b border-title-light-yellow">
          <div className="text-title-light-yellow font-semibold text-lg">
            {props.modalTitle}
          </div>
          <div className="cursor-pointer" onClick={props.closeFoodItemModal}>
            <img src="/img/xmark.png" alt="close" width="20" height="20" />
          </div>
        </div>
        <div className="px-4">
          {props.modalItems.map((foodItem) => (
            <FoodItem
              key={foodItem.id}
              foodItemIndex={props.selectedFoodItemIndex}
              foodItem={foodItem}
              selectFoodPreference={props.selectFoodPreference}
              clickConfirmBtn={props.confirmFoodItemModal}
              confirmBtnName="Confirm"
              isFromModal={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodItemModal;
