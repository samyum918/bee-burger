import { Link } from "react-router-dom";
import { FC } from "react";

interface HeaderProps {
  backUrl: string;
  seatNo: string;
}

const Header: FC<HeaderProps> = (props) => {
  return (
    <div className="mt-12 px-10 flex justify-between w-full">
      <div className="flex justify-between items-center">
        <Link to={props.backUrl}>
          <img src="/img/back_icon.png" alt="back_icon" />
        </Link>
      </div>
      <div className="opacity-60 px-7 py-1 rounded-lg bg-title-light-yellow font-bold">
        Seat {props.seatNo}
      </div>
      <div className="flex justify-between items-center">
        <Link to="/order-summary">
          <img src="/img/note.png" alt="note" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
