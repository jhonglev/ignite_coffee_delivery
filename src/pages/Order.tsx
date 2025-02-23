import location from "@/assets/order-confirmed-location.png";
import clock from "@/assets/order-confirmed-clock.png";
import money from "@/assets/order-confirmed-money.png";
import deliveryMan from "@/assets/delivery-man.png";
import { useContext } from "react";
import { OrderContext } from "@/contexts/order";

export const Order = () => {
  const { orderData } = useContext(OrderContext);

  const returnPaymentMethodDescription = (paymentMethod: string) => {
    switch (paymentMethod) {
      case "credit":
        return "Cartão de Crédito";
      case "debit":
        return "Cartão de débito";
      case "money":
        return "Dinheiro";
      default:
        return "";
    }
  };
  return (
    <div className="grid grid-cols-2">
      <div className="col-span-1">
        <h1 className="text-3xl font-semibold text-[#C47F17]">
          Uhu! Pedido confirmado
        </h1>
        <h3 className="text-xl text-[#403937]">
          Agora é só aguardar que logo o café chegará até você
        </h3>
        <div className="w-full h-[270px] p-[1px] bg-gradient-to-r from-[#DBAC2C] to-[#8047F8] rounded-md rounded-tr-[2rem] rounded-bl-[2rem] mt-8">
          <div className="bg-white rounded-md rounded-tr-[2rem] rounded-bl-[2rem] px-10 py-8 h-full flex flex-col gap-10 text-[#574F4D] leading-tight">
            <div className="flex items-center">
              <img className="h-8" src={location} />
              <span className="ml-2">
                Entrega em{" "}
                <span className="font-semibold">
                  {orderData.street}, {String(orderData.number)}
                </span>
                <br></br> {orderData.neighborhood} - {orderData.city},{" "}
                {orderData.state}
              </span>
            </div>
            <div className="flex items-center">
              <img className="h-8" src={clock} />
              <span className="ml-2">
                Previsão de entrega
                <br></br>
                <span className="font-semibold"> 20 min - 30 min</span>
              </span>
            </div>
            <div className="flex items-center">
              <img className="h-8" src={money} />
              <span className="ml-2">
                Pagamento na entrega
                <br></br>
                <span className="font-semibold">
                  {" "}
                  {returnPaymentMethodDescription(orderData.paymentMethod)}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex items-end justify-end">
        <img src={deliveryMan} />
      </div>
    </div>
  );
};
