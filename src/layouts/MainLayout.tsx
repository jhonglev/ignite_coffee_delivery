import { Header } from "@/components/Header";
import { CartProvider } from "@/contexts/cart";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="w-full h-auto px-40 mb-10">
      <CartProvider>
        <Header />
        <Outlet />
      </CartProvider>
    </div>
  );
};
