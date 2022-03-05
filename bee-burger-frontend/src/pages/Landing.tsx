import { FC } from "react";
import { Link } from "react-router-dom";

interface LandingProps {
  seatNo: string;
}

const Landing: FC<LandingProps> = (props) => {
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
                <div className="font-bold text-8xl text-seat-no-color">
                  {props.seatNo}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link className="w-full" to="/food-items">
          <button
            type="button"
            className="w-full rounded-xl font-bold text-black bg-title-light-yellow h-11"
          >
            Start to order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
