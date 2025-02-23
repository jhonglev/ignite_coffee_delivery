import { Button } from "./ui/button";
import logo from "@/assets/logo.png";
import location from "@/assets/location.png";
import cart from "@/assets/cart.png";
import { useContext } from "react";
import { CartContext } from "@/contexts/cart";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { totalNumberOfProducts } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCartClick = () => {
    if (totalNumberOfProducts > 0) navigate("/checkout");
  };
  return (
    <div className="flex items-center justify-between w-full h-[104px] bg-[#FAFAFA] mb-20">
      <Button variant="ghost">
        <img src={logo} />
      </Button>
      <div className="flex gap-4">
        <Button
          variant="default"
          className="bg-[#EBE5F9] text-[#4B2995] hover:bg-[#EBE5F9]/90"
        >
          <img src={location} />
          Porto Alegre, RS
        </Button>
        <div className="flex">
          <Button
            className="bg-[#F1E9C9] hover:bg-[#F1E9C9]/90 p-2"
            onClick={handleCartClick}
          >
            <img src={cart} />
          </Button>
          {totalNumberOfProducts > 0 && (
            <div className="rounded-full w-5 h-5 bg-[#C47F17] -ml-3 -m-2 flex justify-center items-center text-sm">
              <span className="text-white font-medium">
                {totalNumberOfProducts}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
