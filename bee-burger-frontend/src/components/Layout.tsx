import Landing from "../pages/Landing";
import FoodItems from "../pages/FoodItems";
import ConfirmOrder from "../pages/ConfirmOrder";
import OrderSummary from "../pages/OrderSummary";
import { Routes, Route } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-burger-img bg-no-repeat min-h-screen z-0 m-auto bg-black flex">
      <div className="bg-filter-img bg-no-repeat z-10 w-full flex flex-col">
        <Routes>
          <Route path="/food-items" element={<FoodItems />} />
          <Route path="/confirm-order" element={<ConfirmOrder />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/" element={<Landing seatNo="12B" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
