import { rest } from "msw";
import { appConfig } from "../appConfig";

export const handlers = [
  rest.get(
    `${appConfig.apiBaseUrl}/customer/get-customer-info`,
    (req, res, ctx) => {
      return res(
        ctx.json({
          data: {
            customerId: "d9e2da83-675d-407c-b7e9-262385975e7d",
            seatNo: "15B",
            endTime: "2022-03-20T23:03:43.499",
          },
        })
      );
    }
  ),
];
