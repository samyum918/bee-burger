import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import customerService from "../services/customer.service";
import httpService from "../services/http.service";

const Landing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [seatNo, setSeatNo] = useState("");

  useEffect(() => {
    customerService
      .getCustomerInfo()
      .then((res) => {
        if (res.data) {
          setSeatNo(res.data.seatNo);
          sessionStorage.setItem("customerInfo", JSON.stringify(res.data));
        }
      })
      .catch((ex) => {
        httpService.handleApiError(ex);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="mt-20 flex justify-center items-center w-full">
      <div className="h-75vh w-4/5 flex flex-col justify-between items-center">
        <img
          src="/img/bee_burger_logo.jpg"
          alt="bee_burger_logo"
          className="w-24 h-24 rounded-3xl"
        />
        <div className="flex flex-col justify-between items-center">
          <div className="text-3xl text-title-light-yellow text-center font-semibold mb-7">
            Seat no.
          </div>
          <div className="flex flex-col justify-between items-center">
            <img
              src="/img/seat_no_base_bg.png"
              alt="seat_no_base_bg"
              className="z-10 absolute"
            />
            <div className="seat-no-bg-img mt-7 z-20 flex justify-center items-center">
              <div className="flex justify-center items-center">
                <img src="/img/seat_icon.png" alt="seat_icon" />
                <div className="font-bold text-8xl text-seat-no-color ml-2">
                  {seatNo}
                </div>
              </div>
            </div>
          </div>
        </div>
        {isLoading ? (
          <button
            type="button"
            className="w-full inline-flex justify-center items-center h-11 font-semibold leading-6 shadow rounded-xl text-black bg-title-light-yellow transition ease-in-out duration-150 cursor-not-allowed"
            disabled
          >
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </button>
        ) : (
          <Link className="w-full" to="/food-items">
            <button
              type="button"
              className="w-full rounded-xl font-bold text-black bg-title-light-yellow h-11"
            >
              Start to order
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Landing;
