import { Button } from "../ui/button";
import cart from "@/assets/buy-cart-filled.png";
import minus from "@/assets/minus.png";
import plus from "@/assets/plus.png";
import { CartContext, CoffeeProps } from "@/contexts/cart";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const CoffeeCard = ({
  id,
  name,
  description,
  price,
  photo,
  tags,
  quantity,
}: CoffeeProps) => {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const handleIncreaseQuantity = (id: number) => increaseQuantity(id);

  const handleDecreaseQuantity = (id: number) => decreaseQuantity(id);

  const handleCartClick = (id: number) => {
    increaseQuantity(id);
    navigate("/checkout");
  };

  return (
    <div className="w-full h-[310px] flex items-center px-3 py-4 bg-[#F3F2F2] flex-col rounded-lg rounded-tr-[2rem] rounded-bl-[2rem]">
      <img src={photo} className="-mt-9" />
      <div className="flex mt-4 gap-1">
        {tags?.map((tag) => (
          <span className="bg-[#F1E9C9] text-[#C47F17] py-0.5 px-2 text-xs uppercase font-semibold rounded-xl">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 text-xl font-bold text-[#403937]">{name}</div>
      <div className="mt-1 flex text-base text-center text-[#8D8686]">
        {description}
      </div>
      <div className="flex justify-between w-full px-4 mt-auto text-[#574F4D]">
        <div className="mt-1">
          R$
          <span className="ml-1 text-2xl font-bold">
            {price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </span>
        </div>
        <div className="bg-[#E6E5E5] rounded-lg flex items-center">
          <Button
            className="p-2 bg-transparent hover:bg-transparent"
            variant="ghost"
            onClick={() => handleDecreaseQuantity(id)}
          >
            <img src={minus} />
          </Button>
          <div className="w-3">
            <span className="text-lgtext-black">{quantity}</span>
          </div>
          <Button
            className="p-2 bg-transparent hover:bg-transparent"
            variant="ghost"
            onClick={() => handleIncreaseQuantity(id)}
          >
            <img src={plus} />
          </Button>
        </div>
        <Button className="px-0" onClick={() => handleCartClick(id)}>
          <img src={cart} />
        </Button>
      </div>
    </div>
  );
};
