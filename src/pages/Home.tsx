import coffeeCup from "@/assets/coffee-cup.png";
import cartFilled from "@/assets/cart-filled.png";
import clockFilled from "@/assets/clock-filled.png";
import packageFilled from "@/assets/package-filled.png";
import coffeeFilled from "@/assets/coffee-filled.png";
import { CoffeeCard } from "@/components/Home/coffee-card";
import { CartContext } from "@/contexts/cart";
import { useContext } from "react";

export const Home = () => {
  const { items } = useContext(CartContext);
  return (
    <>
      <div className="w-full h-[544px]">
        <div className="flex">
          <div className="w-6/12 h-full">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <h2 className="text-5xl font-extrabold">
                  Encontre o café perfeito para qualquer hora do dia
                </h2>
                <p className="text-xl pr-10">
                  Com o Coffee Delivery você recebe seu café onde estiver, a
                  qualquer hora
                </p>
              </div>
              <div className="grid grid-cols-2">
                <div className="col-span-1 flex items-center gap-2 text-muted-foreground">
                  <img src={cartFilled} />
                  Compra simples e segura
                </div>
                <div className="col-span-1 flex items-center gap-2 text-muted-foreground">
                  <img src={packageFilled} />
                  Embalagem mantém o café intacto
                </div>
                <div className="col-span-1 flex items-center gap-2 text-muted-foreground mt-4">
                  <img src={clockFilled} />
                  Entrega rápida e rastreada
                </div>
                <div className="col-span-1 flex items-center gap-2 text-muted-foreground mt-4">
                  <img src={coffeeFilled} />O café chega fresquinho até você
                </div>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <img src={coffeeCup} />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold w-full">Nossos cafés</h3>
        <div className="grid grid-cols-4 mt-10 gap-8">
          {items.map(
            ({ id, name, description, photo, price, tags, quantity }) => (
              <div className="col-span-1">
                <CoffeeCard
                  key={id}
                  id={id}
                  name={name}
                  description={description}
                  photo={photo}
                  price={price}
                  tags={tags}
                  quantity={quantity}
                />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};
