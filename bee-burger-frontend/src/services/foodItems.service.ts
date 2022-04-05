import httpService from "./http.service";
import { appConfig } from "../appConfig";
import { FoodItemIf, OrderIf } from "../common/types";

class FoodItemsService {
  getFoodItemsByCategory(catId = 1) {
    return httpService.get<Array<FoodItemIf>>(
      `${appConfig.apiBaseUrl}/food/get-food-items-by-category?catId=${catId}`
    );
  }

  getFoodSetItems(catId = 1) {
    return httpService.get<Array<FoodItemIf>>(
      `${appConfig.apiBaseUrl}/food/get-food-set-items?catId=${catId}`
    );
  }

  submitOrder(order: OrderIf) {
    return httpService.post(`${appConfig.apiBaseUrl}/order/submit`, order);
  }
}

export default new FoodItemsService();
