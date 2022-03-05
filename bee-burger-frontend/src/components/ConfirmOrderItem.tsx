import { FC } from "react";
import { ConfirmOrderItemObj } from "../pages/ConfirmOrder";

interface ConfirmOrderItemProps {
  item: ConfirmOrderItemObj;
  addQuantity: (item: ConfirmOrderItemObj) => void;
  substractQuantity: (item: ConfirmOrderItemObj) => void;
  deleteItem: (item: ConfirmOrderItemObj) => void;
}

const ConfirmOrderItem: FC<ConfirmOrderItemProps> = (props) => {
  return (
    <div className="pt-1 pb-2">
      <div className="pt-2 flex">
        <div>
          <img src={props.item.img} width="55" height="55" alt="burger1" />
        </div>
        <div className="ml-2">
          <div>{props.item.name}</div>
          <div className="opacity-40 text-xs mt-1">
            {props.item.description}
          </div>
        </div>
      </div>

      <div className="mt-2 pl-2 pr-4 pb-2 mb-3 border-b border-gray-700">
        <div className="flex justify-between opacity-40 text-sm">
          <div>Product Price</div>
          <div>${props.item.price}</div>
        </div>
        <div className="flex justify-between opacity-40 text-sm">
          <div>GST Tax</div>
          <div>$1</div>
        </div>
      </div>

      <div className="mt-2 pl-2 pr-4 flex justify-between">
        <div
          className="bg-black rounded-xl p-2 cursor-pointer"
          onClick={() => props.deleteItem(props.item)}
        >
          <img src="/img/delete.png" width="15" height="17" alt="delete_icon" />
        </div>

        <div className="flex justify-between items-center w-1/3">
          <div
            className="bg-black rounded-xl minus-icon cursor-pointer"
            onClick={() => props.substractQuantity(props.item)}
          >
            <img src="/img/minus.png" width="14" height="2" alt="minus_icon" />
          </div>

          <div>{props.item.quantity}</div>

          <div
            className="bg-black rounded-xl px-2 py-2 cursor-pointer"
            onClick={() => props.addQuantity(props.item)}
          >
            <img src="/img/plus.png" width="13" height="13" alt="plus_icon" />
          </div>
        </div>

        <div className="flex items-center">${props.item.totalPrice}</div>
      </div>
    </div>
  );
};

export default ConfirmOrderItem;
