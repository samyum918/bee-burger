import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="absolute top-12 flex justify-between w-4/5 mx-10">
      <div className="flex justify-between items-center">
        <Link to={props.back}>
          <img src="/img/back_icon.png" alt="back_icon" />
        </Link>
      </div>
      <div className="opacity-60 px-7 py-1 rounded-lg bg-title-light-yellow font-bold">
        Seat {props.seatNo}
      </div>
      <div className="flex justify-between items-center">
        <Link to="/order-summary">
          <img src="/img/cart_icon.png" alt="cart_icon" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
