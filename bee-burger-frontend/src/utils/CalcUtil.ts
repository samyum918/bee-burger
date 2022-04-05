import { FoodPreference } from "../common/types";

class CalcUtil {
  calcAdditionalPrice(foodPreferences: FoodPreference[] | null | undefined) {
    let additionalPrice = 0;
    if (foodPreferences) {
      foodPreferences.forEach((foodPreference) => {
        if (foodPreference.options) {
          foodPreference.options.forEach((option) => {
            if (option.selected && option.additionalPrice > 0) {
              additionalPrice += option.additionalPrice;
            }
          });
        }
      });
    }
    return additionalPrice;
  }

  calcTotalPrice(price: number, additionalPrice: number, quantity: number) {
    return (price + additionalPrice) * quantity;
  }
}

export default new CalcUtil();
