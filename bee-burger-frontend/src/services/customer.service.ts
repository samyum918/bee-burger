import httpService from "./http.service";
import { appConfig } from "../appConfig";
import { CustomerInfoIf } from "../common/types";

class CustomerService {
  getCustomerInfo() {
    return httpService.get<CustomerInfoIf>(
      `${appConfig.apiBaseUrl}/customer/get-customer-info`
    );
  }
}

export default new CustomerService();
