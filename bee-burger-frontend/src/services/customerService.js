import httpService from "./httpService";
import { appConfig } from "../appConfig";

function getCustomerInfo() {
  return httpService.get(`${appConfig.apiBaseUrl}/customer/get-customer-info`);
}

export default { getCustomerInfo };
