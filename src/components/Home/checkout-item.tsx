import { Button } from "../ui/button";
import trash from "@/assets/trash.png";
import minus from "@/assets/minus.png";
import plus from "@/assets/plus.png";
import { formatCurrency } from "@/utils/format-currency";
import { CartContext, CoffeeProps } from "@/contexts/cart";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const CheckoutItem = ({
  id,
  quantity,
  name,
  photo,
  price,
}: CoffeeProps) => {
  const navigate = useNavigate();
  const { items, increaseQuantity, decreaseQuantity, removeItem } =
    useContext(CartContext);

  const handleIncreaseQuantity = (id: number) => increaseQuantity(id);

  const handleDecreaseQuantity = (id: number, quantity: number) => {
    if (quantity === 1) return;
    decreaseQuantity(id);
  };

  const handleRemoveItem = (id: number) => {
    const lastItemWithQuantity =
      items.filter((item) => item.quantity > 0).length === 1;
    removeItem(id);
    if (lastItemWithQuantity) navigate("/");
  };

  return (
    <div className="col-span-1 flex items-start gap-6 my-8">
      <img src={photo} className="max-h-16" />
      <div className="flex flex-col">
        <span className="text-xl text-[#403937]">{name}</span>
        <div className="flex items-center gap-2">
          <div className="bg-[#E6E5E5] rounded-lg flex items-center">
            <Button
              className="p-3 bg-transparent hover:bg-transparent"
              variant="ghost"
              onClick={() => handleDecreaseQuantity(id, quantity)}
            >
              <img src={minus} />
            </Button>
            <span className="text-lg text-[#403937]">{quantity}</span>
            <Button
              className="p-3 bg-transparent hover:bg-transparent"
              variant="ghost"
              onClick={() => handleIncreaseQuantity(id)}
            >
              <img src={plus} />
            </Button>
          </div>
          <Button
            variant="ghost"
            className="p-3 bg-[#E6E5E5] rounded-lg"
            onClick={() => handleRemoveItem(id)}
          >
            <img src={trash} />
            <span className="text-[#574F4D]">REMOVER</span>
          </Button>
        </div>
      </div>
      <div className="flex ml-auto items-start justify-end text-2xl font-semibold text-[#574F4D]">
        {formatCurrency(quantity * price)}
      </div>
    </div>
  );
};
