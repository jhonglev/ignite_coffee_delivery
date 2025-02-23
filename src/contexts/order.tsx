import { createContext, ReactNode, useState } from "react";

interface OrderDataProps {
  number: number;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: string;
}

interface OrderProps {
  orderData: OrderDataProps;
  setOrderData: (data: OrderDataProps) => void;
}

export const OrderContext = createContext<OrderProps>({
  orderData: {
    number: 0,
    street: "",
    neighborhood: "",
    city: "",
    state: "",
    paymentMethod: "",
  },
  setOrderData: () => {},
});

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<OrderDataProps>({
    number: 0,
    street: "",
    neighborhood: "",
    city: "",
    state: "",
    paymentMethod: "",
  });
  return (
    <OrderContext.Provider value={{ orderData: data, setOrderData: setData }}>
      {children}
    </OrderContext.Provider>
  );
};
