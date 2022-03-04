import Landing from "../pages/Landing";
import FoodItems from "../pages/FoodItems";
import ConfirmOrder from "../pages/ConfirmOrder";
import OrderSummary from "../pages/OrderSummary";
import { Routes, Route } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-burger-img bg-no-repeat min-h-screen z-0 m-auto bg-black flex">
      <div className="bg-filter-img bg-no-repeat z-10 w-full flex">
        <Routes>
          <Route exact path="/" element={<Landing seatNo="12B" />} />
          <Route exact path="/food-items" element={<FoodItems />} />
          <Route exact path="/confirm-order" element={<ConfirmOrder />} />
          <Route exact path="/order-summary" element={<OrderSummary />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
