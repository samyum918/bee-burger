import { FC } from "react";

interface FoodItemProps {
  name: string;
  description: string;
  price: string;
  img: string;
  foodPreferences?: FoodPreference[] | null | undefined;
}

interface FoodPreference {
  question: string;
  options: string[];
}

const FoodItem: FC<FoodItemProps> = (props) => {
  return (
    <div className="bg-food-item-bg text-title-light-yellow rounded-2xl mt-4">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="ml-4 my-3 flex flex-col justify-between">
            <div>
              <div>{props.name}</div>
              <div className="opacity-40 text-xs mt-1">{props.description}</div>
            </div>
            <div className="text-food-item-price rounded-lg border border-food-item-price px-6 w-fit">
              ${props.price}
            </div>
          </div>
          <div>
            <img src={props.img} width="130" height="130" alt={props.name} />
          </div>
        </div>

        {props.foodPreferences &&
          props.foodPreferences.map((foodPreference) => (
            <div className="ml-4 mb-3 pr-4">
              <div className="mb-4">
                <div className="mb-2">{foodPreference.question}</div>
                <div className="flex text-food-item-price text-sm">
                  {foodPreference.options.map((option) => {
                    <div
                      className="rounded-lg border border-food-item-price px-4 mr-2 w-fit"
                      data-choice-group="food-preference"
                    >
                      {option}
                    </div>;
                  })}
                </div>
              </div>
              <button
                type="button"
                className="w-fit rounded-lg font-bold text-black text-sm bg-title-light-yellow px-4 py-1 mt-2"
              >
                Add Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FoodItem;
