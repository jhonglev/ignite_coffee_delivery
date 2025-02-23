import location from "@/assets/order-confirmed-location.png";
import clock from "@/assets/order-confirmed-clock.png";
import money from "@/assets/order-confirmed-money.png";
import deliveryMan from "@/assets/delivery-man.png";

export const OrderConfirmed = () => {
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
                  Rua João Daniel Martinelli, 102
                </span>
                <br></br> Farrapos - Porto Alegre, RS
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
                <span className="font-semibold"> Cartão de Crédito</span>
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
