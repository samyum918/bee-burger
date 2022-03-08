import httpService from "./httpService";
import { appConfig } from "../appConfig";

function getCatergories() {
  return httpService.get(`${appConfig.apiBaseUrl}/category/all`);
}

function getFoodItemsByCategory(catId = 1) {
  return httpService.get(
    `${appConfig.apiBaseUrl}/food/get-food-items-by-category?catId=${catId}`
  );
}

export default { getCatergories, getFoodItemsByCategory };
