import httpService from "./http.service";
import { appConfig } from "../appConfig";
import { CategoryIf } from "../common/types";

class CategoryService {
  getAll() {
    return httpService.get<Array<CategoryIf>>(
      `${appConfig.apiBaseUrl}/category/all`
    );
  }
}

export default new CategoryService();
